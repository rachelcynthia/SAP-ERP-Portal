import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MlService {

  constructor(private httpService:HttpClient) { }

  getLinear(obj:Number){
    return this.httpService.post('http://127.0.0.1:1080/linear',[[obj]])
  }

  getLasso(obj){
    return this.httpService.post('http://127.0.0.1:1080/lasso',[obj])
  }

  getDT(obj){
    return this.httpService.post('http://127.0.0.1:1080/dt',[obj])
  }

  getLine(obj){
    return this.httpService.post('http://127.0.0.1:1080/line',obj)
  }

  getBar(obj){
    return this.httpService.post('http://127.0.0.1:1080/bar',obj)
  }

  getPie(obj){
    return this.httpService.post('http://127.0.0.1:1080/pie',obj)
  }

}
