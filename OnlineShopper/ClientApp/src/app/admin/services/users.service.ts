import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from "@angular/forms";
import { Observable, Observer } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
  }
  EmailMustBeUnique=(AbstractControl:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        
    return this.http.get<any>("api/Users/CheckEmail?email="+AbstractControl.value).map(a => {
  
        if (a.result == true) {
            return null;
        }
        else {
          AbstractControl.hasError("user Should be unique");
            return { Unique: "user Should be unique" };
        }
    });
  
}
 
}
