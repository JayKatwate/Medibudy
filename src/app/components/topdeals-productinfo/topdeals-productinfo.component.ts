import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-topdeals-productinfo',
  templateUrl: './topdeals-productinfo.component.html',
  styleUrls: ['./topdeals-productinfo.component.scss']
})
export class TopdealsProductinfoComponent {

  locationobj:any;
  productdrugcode:any;
  productdetails:any;

  constructor(private route:ActivatedRoute,private api:ApiService,private cart:CartService){}

  ngOnInit(){
    this.drugcode()
    this.loadLocationData();
    this.getdata();
  }

  loadLocationData() {
    const storedLocationData: string | null = sessionStorage.getItem('locationData');
    if (storedLocationData) {
      this.locationobj = JSON.parse(storedLocationData);
    }
  }

  drugcode(){
    this.productdrugcode=(this.route.snapshot.paramMap.get('drugCode')) ;
  }

  getdata(){
    const endpoint = 'top-deals?drugCode='+this.productdrugcode;
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
