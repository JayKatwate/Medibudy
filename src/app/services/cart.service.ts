import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartcountSub: BehaviorSubject<number> = new BehaviorSubject(0);
  cartcountObj$ = this.cartcountSub.asObservable();

  cartitems: any = [];

  constructor() { }

  sendcartcount(count: number) {
    this.cartcountSub.next(count);
  }

  getdatafromlocalstorage() {
    let cartArr: any = [];
    let cartdata = localStorage.getItem('cart');
    if (cartdata != null) {
      cartArr = JSON.parse(cartdata);
      return cartArr;
    } else {
      return cartArr = [];
    }
  }

  addtocartservice(product: any) {
    if (product) {
      this.cartitems = this.getdatafromlocalstorage();
      this.cartitems.push(product);
      let productstr = JSON.stringify(this.cartitems);
      localStorage.setItem('cart', productstr);
      this.sendcartcount(this.cartitems.length)
    }
  }

}
