import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeMainService {

  constructor(private http:HttpClient) { }
  proj;
  getProjList(obj){
    return this.http.post('http://localhost:3080/emp/proj/list',obj)
  }

  getProjDet(obj){
    return this.http.post('http://localhost:3080/emp/proj/det',obj)
  }
  getProj(){
    return this.proj
  }
  setProj(proj){
    this.proj = proj;
  }
  getPerfDet(obj){
    return this.http.post('http://localhost:3080/emp/perf/det',obj)
  }
  getPerfList(obj){
    return this.http.post('http://localhost:3080/emp/perf/list',obj)
  }
  perf;
  getPerf(){
    return this.perf;
  }
  setPerf(perf){
    this.perf = perf;
  }

  getLeaveList(obj){
    return this.http.post('http://localhost:3080/emp/leave/list',obj)
  }
  getLeaveQuota(obj){
    return this.http.post('http://localhost:3080/emp/leave/quota',obj)
  }
  createLeaveReq(obj){
    return this.http.post('http://localhost:3080/emp/leave/req',obj)
  }  
  leave;
  setLeave(i){
    this.leave = i;
  }
  getLeave(){
    return this.leave
  }
  obj;
  setLeaveCriteria(obj){
    this.obj = obj;
  }
  getLeaveCriteria(){
    return this.obj
  }
  getBasicPayDet(obj){
    return this.http.post('http://localhost:3080/emp/basicpay',obj)
  }
  getPayslipDet(obj){
    return this.http.post('http://localhost:3080/emp/payslip',obj)
  }
  getPayroll(obj){
    return this.http.post('http://localhost:3080/emp/payroll',obj)
  }
  pay;
  getPay(){
    return this.pay;
  }
  setPay(pay){
    this.pay = pay;
  }

  getFFDet(obj){
    return this.http.post('http://localhost:3080/emp/ff',obj)
  }
  bool = false;
 create = false;
 paybool =false;
}
