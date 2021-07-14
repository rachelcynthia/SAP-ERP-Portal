import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {

  constructor(private http:HttpClient) { }
  login(obj){
    return this.http.post('http://localhost:3080/emp/login',obj)
  }
  getDetails(obj){
    return this.http.post('http://localhost:3080/emp/det',obj)
  }
  editDetails(obj){
    return this.http.post('http://localhost:3080/emp/edit',obj)
  }
  prof
  getProfDetails(){
    return this.prof;
  }
  setProfDetails(obj){
    this.prof = obj;
  }
}
