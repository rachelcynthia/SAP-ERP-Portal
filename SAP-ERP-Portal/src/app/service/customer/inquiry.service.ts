import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  DocNum:string;

  constructor(private httpClient: HttpClient) { }

  setDocNum(docNum){
    this.DocNum = docNum;
  }

  getDocNum(){
    return this.DocNum;
  }

  getList(c_id){
    return this.httpClient.post('http://localhost:3080/cust/getListSalesDoc',{"CUSTOMER_NUM": c_id});
  }

  getDetails(docNum){
    return this.httpClient.post('http://localhost:3080/cust/getInquiry',{"SALESDOCUMENT":docNum})
  }


}
