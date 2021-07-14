import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  login(obj){
    return this.http.post('http://localhost:3080/vend/login',obj)
  }

  getDetails(obj){
    return this.http.post('http://localhost:3080/vend/details',obj)
  }

  editDetails(obj){
    return this.http.post('http://localhost:3080/vend/edit',obj)
  }
}
