import { UsersService } from "./../../../services/users.service";
import { HttpClient } from "@angular/common/http";
import { Counties } from "./../../../model/counties";
import { CountiesService } from "./../../../services/counties.service";
import { RolesService } from "./../../../services/roles.service";
import { Component, OnInit } from "@angular/core";
import { Roles } from "src/app/admin/model/roles";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"],
})
export class CreateUserComponent implements OnInit {
  Counties: Counties[] = [];
  roles: Roles[] = [];
  selectedCountryCode = null;
  form = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(3),
    ]),

    lastName: new FormControl("", [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(3),
    ]),
    email: new FormControl(
      "",
      [Validators.email, Validators.required],
      [this.UsersService.EmailMustBeUnique]
    ),
    userName: new FormControl(
      "",
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
      [this.UsersService.UserMustBeUnique]
    ),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    address: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
  });

  constructor(
    private RolesService: RolesService,
    private countries: CountiesService,
    private UsersService: UsersService
  ) {}

  ngOnInit() {
    this.RolesService.GetRoles().subscribe((a) => {
      this.roles = a;
    });
    this.countries.GetCounties().subscribe((a) => {
      this.Counties = a;
    });
  }
  SelectChange(code) {
    console.log(code);
    this.selectedCountryCode = code.value;
  }
  GetImage(code: string) {
    return `https://www.countryflags.io/${code.toLowerCase()}/flat/16.png`;
  }
  SubmitForm() {
    this.form.value.phone =
      this.selectedCountryCode + " " + this.form.value.phone;
    console.log(this.form.value);
    this.UsersService.CreateUser(this.form.value).subscribe((a) => {
     
      this.form.reset();
    });
  }

  get Form() {
    return this.form;
  }

  get Email() {
    return this.form.get("email");
  }
  get FirstName() {
    return this.form.get("firstName");
  }
  get LastName() {
    return this.form.get("lastName");
  }
  get UserName() {
    return this.form.get("userName");
  }
  get Password() {
    return this.form.get("password");
  }
  get Address() {
    return this.form.get("address");
  }
  get Country() {
    return this.form.get("country");
  }
  get Role() {
    return this.form.get("role");
  }
  get Phone() {
    return this.form.get("phone");
  }
}
