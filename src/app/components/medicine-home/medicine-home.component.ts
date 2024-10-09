import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent {

  locationobj: any = {
    city: "Karad",
    pincode: "415124"
  };
  topdealsdata: any[] = [];
  searchtext: string = "";
  searchedmedicine: any[] = [];
  endpoint:any='top-deals';

  searchsubject$ = new Subject();

  constructor(private api: ApiService, private cart:CartService,private router :Router) { }

  ngOnInit() {
    this.topdeals();
    this.searchtextapi();
    this.loadLocationData();
  }

  @ViewChild('exampleModal') exampleModal: ElementRef | undefined;


  // ngAfterViewInit() {
  //   const modal: any = new bootstrap.Modal(this.exampleModal.nativeElement);
  //   modal.show();
  // }

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

  getpincode() {
    if (this.locationobj.pincode && this.locationobj.pincode.length === 6) {
      const endpoint = 'get-pincode-details?pincode=' + this.locationobj.pincode;
      this.api.getdata(endpoint).subscribe({
        next: (res: any) => {
          this.locationobj.pincode = res[0].pincode;
          this.locationobj.city = res[0].pincodeCity;
          sessionStorage.setItem('locationData', JSON.stringify(this.locationobj));
        },
        error: () => { }
      })
    }
  }

  search() {
    if (this.searchtext.trim() == '') {
      this.searchedmedicine = []
    }
    else {
      this.searchsubject$.next(this.searchtext)
    }
  }

  searchtextapi() {
    this.searchsubject$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((el: any) => this.api.getdata("top-deals?like_medicineName=" + this.searchtext))
    ).subscribe({
      next: (res: any) => {
        this.searchedmedicine = res;
      }
    })
  }

  addtocart(item:any){
    this.cart.addtocartservice(item);
  }

  routeto(drugCode:any){
    this.router.navigate(['/topdeals-productinfo',drugCode])
  }

}
