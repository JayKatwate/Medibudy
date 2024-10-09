import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { FormsModule } from '@angular/forms';
import { MedicinesCategoryWiseComponent } from './components/medicines-category-wise/medicines-category-wise.component';
import { CartService } from './services/cart.service';
import { TopdealsProductinfoComponent } from './components/topdeals-productinfo/topdeals-productinfo.component';
import { CategorywiseProductinfoComponent } from './components/categorywise-productinfo/categorywise-productinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineHomeComponent,
    MedicinesCategoryWiseComponent,
    TopdealsProductinfoComponent,
    CategorywiseProductinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
