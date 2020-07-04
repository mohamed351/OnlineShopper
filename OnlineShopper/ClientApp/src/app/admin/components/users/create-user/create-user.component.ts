import { Counties } from './../../../model/counties';
import { CountiesService } from './../../../services/counties.service';
import { RolesService } from './../../../services/roles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  Counties: Counties[] = [];
  constructor(private RolesService:RolesService, private countries:CountiesService) { }

  ngOnInit() {
    this.RolesService.GetRoles().subscribe(a => {
      console.log(a);
    });
    this.countries.GetCounties().subscribe(a => {
      this.Counties = a;
    });
  }
  GetImage(code:string) {
 
    return `https://www.countryflags.io/${code.toLowerCase()}/flat/16.png` ;
   
  }

   


}
