import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgingService {

  constructor(private httpClient: HttpClient) { }
  getList(obj) {
    return this.httpClient.post('http://localhost:3080/cust/aging/list', obj);
  }

  getDetails(obj) {
    return this.httpClient.post('http://localhost:3080/cust/aging/display', obj);
  }
  docNum
  setDocNum(i) {
    this.docNum = i
  }
  getDocNum() {
    return this.docNum;
  }
  header;
  setHeader(header){
    this.header =header;
  }
  getHeader(){
    return this.header;
  }
}


