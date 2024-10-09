import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-medicines-category-wise',
  templateUrl: './medicines-category-wise.component.html',
  styleUrls: ['./medicines-category-wise.component.scss']
})
export class MedicinesCategoryWiseComponent {

  locationobj:any;
  topdealsdata:any[]=[];
  endpoint:any = 'top-deals-by-category';

  constructor(private api:ApiService,private cart:CartService,private router:Router) { }

  ngOnInit(){
    this.loadLocationData();
    this.topdeals()
  }

  loadLocationData() {
    const storedLocationData: string | null = sessionStorage.getItem('locationData');
    if (storedLocationData) {
      this.locationobj = JSON.parse(storedLocationData);
    }
  }

  topdeals() {
    this.api.getdata(this.endpoint).subscribe({
      next: (res: any) => {
        this.topdealsdata = res;
      },
      error: (error: Error) => { }
    })
  }

  addtocart(item:any){
    this.cart.addtocartservice(item);
  }

  routeto(drugCode:any){
    this.router.navigate(['/categorywise-productinfo',drugCode])
  }

}
