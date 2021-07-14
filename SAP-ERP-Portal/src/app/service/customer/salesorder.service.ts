import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesorderService {

  sales_doc;
  constructor(private httpClient: HttpClient) { }
  setSalesDoc(doc){
    this.sales_doc = doc;
  }
  getSalesDoc(){
    return this.sales_doc;
  }
  getSalesOrderList(obj){
    return this.httpClient.post('http://localhost:3080/cust/getListSalesOrder',obj)
  }

  getSalesOrderDetails(obj){
    return this.httpClient.post('http://localhost:3080/cust/getSalesOrder',obj);
  }
}
