import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient: HttpClient) { }

  login(username:string, password:string){
    return this.httpClient.post('http://localhost:3080/cust/login',{username:username, password:password});
  }
}
