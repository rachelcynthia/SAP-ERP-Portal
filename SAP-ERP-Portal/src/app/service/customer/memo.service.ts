import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor(private httpService:HttpClient) {
   }
   getMemoList(obj){
     return this.httpService.post('http://localhost:3080/cust/memo/list',obj)
   }

   getMemoDetail(obj){
    return this.httpService.post('http://localhost:3080/cust/memo/display',obj)
   }

   getMemoPrice(obj){ 
    return this.httpService.post('http://localhost:3080/cust/memo/pricing',obj)
   }

   docNum;
   setDocNum(docNum){
     this.docNum=docNum;
   }
   getDocNum(){
     return this.docNum;
   }
}
