import { RolesService } from './../../../services/roles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  constructor(private RolesService:RolesService) { }

  ngOnInit() {
    this.RolesService.GetRoles().subscribe(a => {
      console.log(a);
    });
  }


}
