import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

const router: Routes = [
  { path: "", component: HomeComponent },
  { path: "user", component: UsersComponent },
  { path: "product", component: ProductsComponent },
  {path:"orders",component:OrdersComponent}
  
]

@NgModule({
  declarations: [HomeComponent, UsersComponent, ProductsComponent, OrdersComponent, CreateUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class AdminModule { }
