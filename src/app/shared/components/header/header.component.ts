import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  countnumber!:number;

  constructor(private count:CartService){}

  ngOnInit(){
    this.count.cartcountObj$.subscribe({
      next:(res:any)=>{
        console.log(res)
        this.countnumber = res;
      }
    });

    this.getcartitems()
  }

  getcartitems(){
    let cartitems =this.count.getdatafromlocalstorage();
    this.countnumber = cartitems.length;
  }

}
