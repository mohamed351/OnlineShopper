import { Counties } from './../model/counties';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountiesService {
  private _jsonUrl = 'assets/countries.json';
  constructor(private http: HttpClient) { }
  GetCounties() {
   return this.http.get<Counties[]>(this._jsonUrl);
  }

}
