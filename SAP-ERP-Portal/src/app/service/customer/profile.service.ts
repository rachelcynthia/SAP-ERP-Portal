import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  data;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  viewDetails(inp) {
    return this.httpClient.post('http://localhost:3080/cust/details', inp);
  }

  viewDetails1(inp){
    return this.httpClient.post('http://localhost:3080/cust/details1',inp)
  }
  prof;
  setProf(inp){
    this.prof = inp;
  }
  getProf(){
    return this.prof;
  }
  prof1;
  setProf1(inp){
    this.prof1 = inp;
  }
  getProf1(){
    return this.prof1;
  }
  editDetails(inp) {
    return this.httpClient.post('http://localhost:3080/cust/edit', inp);
  }

  uploadDetails(inp){
    return this.httpClient.post('http://localhost:3080/cust/dataUpload',inp)
  }

}
