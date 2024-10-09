import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-categorywise-productinfo',
  templateUrl: './categorywise-productinfo.component.html',
  styleUrls: ['./categorywise-productinfo.component.scss']
})
export class CategorywiseProductinfoComponent {

  locationobj:any;

  drugCode:any;
  productdetails:any;

  constructor(private api:ApiService,private route:ActivatedRoute,private cart:CartService){}

  ngOnInit(){
    this.productdrugCode();
    this.loadLocationData();
    this.getdata();
  }

  loadLocationData() {
    const storedLocationData: string | null = sessionStorage.getItem('locationData');
    if (storedLocationData) {
      this.locationobj = JSON.parse(storedLocationData);
    }
  }

  productdrugCode(){
    this.drugCode=(this.route.snapshot.paramMap.get('drugCode')) ;
  }

  getdata(){
    const endpoint = 'category-products?drugCode='+this.drugCode;
    this.api.getdata(endpoint).subscribe({
      next:(res:any)=>{
        if(res){
          this.productdetails = res;
        }
      }
    })
  }

  addtocart(item:any){
    this.cart.addtocartservice(item);
  }

}
