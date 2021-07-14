import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DeliverylistService {

  header
  item = [];

  constructor(private httpClient: HttpClient,private cookieService:CookieService) { }

  getListofDelivery(obj){
    return this.httpClient.post('http://localhost:3080/cust/deliveryList',obj);
  }

  docNum
  setDelivery(docNum){
    this.docNum=docNum;
  }
  getDelivery(){
    console.log(this.docNum)
    return this.docNum;
  }

  getDeliveryDetails(obj){
    return this.httpClient.post('http://localhost:3080/cust/deliveryDisplay',obj)
  }
}
