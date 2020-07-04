import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../model/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }
  
  GetRoles() {
    return this.http.get<Roles[]>("/api/Roles");
  }
}
