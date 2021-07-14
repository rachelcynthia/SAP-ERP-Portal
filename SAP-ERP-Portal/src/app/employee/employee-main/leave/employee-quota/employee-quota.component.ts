import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';

@Component({
  selector: 'app-employee-quota',
  templateUrl: './employee-quota.component.html',
  styleUrls: ['./employee-quota.component.css']
})
export class EmployeeQuotaComponent implements OnInit {

  constructor(private employeeService:EmployeeMainService, private cookieService:CookieService, private router:Router) { }
  flag=1
  quot;
  ngOnInit(): void {
    this.employeeService.getLeaveQuota({"PERNR":this.cookieService.get("e_username")}).subscribe((data)=>{
      console.log(data["IT_LIST"])
      if(Array.isArray(data['IT_LIST']['item'])){
        this.quot = data['IT_LIST']['item']
      }
      else{
        this.quot = [data['IT_LIST']['item']]
      }
    })
  }
  onClick(i) {
    this.employeeService.setLeaveCriteria(i);
    this.employeeService.create = true;
    // this.router.navigateByUrl('emp/leave/create')
  }

  // onSort(){
  //   if(this.flag==1){this.quot = this.DescSortData()}
  //   else{this.quot = this.AscSortData()}
  //   console.log( this.quot)
  //   this.flag = this.flag == 1?0:1;
  // }

  // DescSortData() {
  //   return this.quot.sort((a, b) => {
  //     return <any>new Date(b['BEGDA']) - <any>new Date(a['BEGDA']);
  //   });
  // }

  // AscSortData(){
  //   return this.quot.sort((a, b) => {
  //     return <any>new Date(a['BEGDA']) - <any>new Date(b['BEGDA']);
  //   });
  // }

}
