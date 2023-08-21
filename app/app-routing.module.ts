import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFullComponent } from './product-full/product-full.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products/:id', component: ProductFullComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
