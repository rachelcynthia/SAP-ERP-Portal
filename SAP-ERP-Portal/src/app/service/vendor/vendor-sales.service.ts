import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorSalesService {

  constructor(private http: HttpClient) { }
  goods;
  PO;
  RFQ;

  setGoods(goods) {
    this.goods = goods
  }
  d;
  setGoodsYear(d){
    this.d=d
  }
  getGoodsYear(){
    return this.d
  }
  getGoods() {
    return this.goods
  }

  getGoodsList(obj) {
    return this.http.post('http://localhost:3080/vend/goods/list', obj)
  }
  getGoodsDetails(obj) {
    return this.http.post('http://localhost:3080/vend/goods/details', obj)
  }

  setPO(PO){
    this.PO = PO;
  }
  getPO(){
    return this.PO;
  }

  getPOList(obj){
    return this.http.post('http://localhost:3080/vend/po/list', obj)
  }

  getPODetails(obj){
    return this.http.post('http://localhost:3080/vend/po/det', obj)
  }

  createPO(obj){
    return this.http.post('http://localhost:3080/vend/po/create', obj)
  }

  setRFQ(RFQ){
    this.RFQ = RFQ;
  }
  getRFQ(){
    return this.RFQ;
  }

  getRFQList(obj){
    return this.http.post('http://localhost:3080/vend/rfq/list', obj)
  }

  getRFQDetails(obj){
    return this.http.post('http://localhost:3080/vend/rfq/det', obj)
  }
  


}
