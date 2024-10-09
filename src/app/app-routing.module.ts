import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { MedicinesCategoryWiseComponent } from './components/medicines-category-wise/medicines-category-wise.component';
import { TopdealsProductinfoComponent } from './components/topdeals-productinfo/topdeals-productinfo.component';
import { CategorywiseProductinfoComponent } from './components/categorywise-productinfo/categorywise-productinfo.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine-home',component:MedicineHomeComponent},
  {path:'medicines-category-wise',component:MedicinesCategoryWiseComponent},
  {path:'topdeals-productinfo/:drugCode',component:TopdealsProductinfoComponent},
  {path:'categorywise-productinfo/:drugCode',component:CategorywiseProductinfoComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
