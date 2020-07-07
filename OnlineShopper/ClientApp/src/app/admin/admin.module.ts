import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RolesService } from './services/roles.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import { CountiesService } from './services/counties.service';
import { MatIcon, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { UsersService } from './services/users.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DatatableDataSource } from './components/users/user.datasource';
import { ToastrModule } from 'ngx-toastr';


const router: Routes = [
  { path: "", component: HomeComponent },
  { path: "user", component: UsersComponent },
  { path: "product", component: ProductsComponent },
  { path: "orders", component: OrdersComponent },
  {path:"create-user",component:CreateUserComponent}
  
]

@NgModule({
  declarations: [HomeComponent, UsersComponent, ProductsComponent, OrdersComponent, CreateUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
  ],
  providers:[RolesService,CountiesService,UsersService]
  
})
export class AdminModule { }
