import { UsersService } from './../../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Counties } from './../../../model/counties';
import { CountiesService } from './../../../services/counties.service';
import { RolesService } from './../../../services/roles.service';
import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/admin/model/roles';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  Counties: Counties[] = [];
  roles: Roles[] = [];
 
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required
      , Validators.maxLength(15)
      , Validators.minLength(2)]),
    
    lastName: new FormControl('', [Validators.required
      , Validators.maxLength(15)
      , Validators.minLength(2)]),
    email: new FormControl('', [Validators.email, Validators.required],[this.UsersService.EmailMustBeUnique])
  })

  constructor(private RolesService:RolesService, private countries:CountiesService, private UsersService:UsersService) { }

  ngOnInit() {
    this.RolesService.GetRoles().subscribe(a => {
      this.roles = a;
    });
    this.countries.GetCounties().subscribe(a => {
      this.Counties = a;
    });
  }
  GetImage(code:string) {
 
    return `https://www.countryflags.io/${code.toLowerCase()}/flat/16.png` ;
   
  }
  get Email() {
    return this.form.get("email");
  }

   


}
