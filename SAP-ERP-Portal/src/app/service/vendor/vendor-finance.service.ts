import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorFinanceService {

  constructor(private http:HttpClient) { }
  aging;
  getAging(){
    return this.aging;
  }
  setAging(aging){
    this.aging = aging;
  }
  head;
  setAgingHead(head){
    this.head=head;
  }
  getAgingHead(){
    return this.head
  }
  getAgingList(obj){
    return this.http.post('http://localhost:3080/vend/aging',obj)
  }
  getAgingDet(obj){
    return this.http.post('http://localhost:3080/vend/aging/det',obj)
  }


  inv;
  fisc;
  setFisc(fisc){
    this.fisc = fisc;
  }
  getFisc(){
    return this.fisc;
  }
  getInv(){
    return this.inv;
  }
  setInv(inv){
    this.inv = inv;
  }
  getInvDet(obj){
    return this.http.post('http://localhost:3080/vend/inv/det',obj)
  }
  getInvList(obj){
    return this.http.post('http://localhost:3080/vend/inv/list',obj)
  }


  memo;
  memohead;
  getMemoHead(){
    return this.memohead
  }
  setMemoHead(head){
    this.memohead=head;
  }
  getMemo(){
    return this.memo;
  }
  setMemo(memo){
    this.memo = memo;
  }
  getMemoDet(obj){
    return this.http.post('http://localhost:3080/vend/memo/det',obj)
  }

  getMemoList(obj){
    return this.http.post('http://localhost:3080/vend/memo/list',obj)
  }

}
