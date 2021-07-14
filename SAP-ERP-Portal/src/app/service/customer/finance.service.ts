import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private httpClient:HttpClient) { }

  getAging(){
    return this.httpClient.post('http://localhost:8080/cust/aging',{})
  }

  getMemo(){
    return this.httpClient.post('http://localhost:8080/cust/memo/list',{})
  }

  getMemoDisplay(){
    return this.httpClient.post('http://localhost:8080/cust/memo/display',{})
  }
}
