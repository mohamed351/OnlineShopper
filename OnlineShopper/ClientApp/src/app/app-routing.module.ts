import { UserComponent } from './router-component/user/user.component';
import { AdminComponent } from './router-component/admin/admin.component';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes} from "@angular/router";

const router: Routes = [
  {path:"admin",component:AdminComponent,children:[
    {path:"",loadChildren:()=> import("./admin/admin.module").then(a=>a.AdminModule)}
  ]
  },
  {
    path: "", component: UserComponent, children: [
    {path:"users",loadChildren:()=>import("./users/users.module").then(a=>a.UsersModule)}
    ]
  },
  
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }