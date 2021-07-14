import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';

@Component({
  selector: 'app-employee-leave-list',
  templateUrl: './employee-leave-list.component.html',
  styleUrls: ['./employee-leave-list.component.css']
})
export class EmployeeLeaveListComponent implements OnInit {

  constructor(private employeeService:EmployeeMainService, private cookieService:CookieService, private router:Router) { }
  l1;
  flag=1;
  ngOnInit(): void {
    this.employeeService.getLeaveList({'PERNR':this.cookieService.get("e_username")}).subscribe((data)=>{
      if(Array.isArray(data['IT_LIST']['item'])){
        this.l1 =data['IT_LIST']['item'];
        this.onSort()
      }
      else{
        this.l1 = [data['IT_LIST']['item']]
        this.onSort()
      }
    })
  }

  // onClick(i) {
  //   this.employeeService.setLeave(i);
  //   this.router.navigateByUrl('emp/leave/display')
  // }

  onSort(){
    if(this.flag==1){this.l1 = this.DescSortData()}
    else{this.l1 = this.AscSortData()}
    console.log( this.l1)
    this.flag = this.flag == 1?0:1;
  }

  DescSortData() {
    return this.l1.sort((a, b) => {
      return <any>new Date(b['BEGDA']) - <any>new Date(a['BEGDA']);
    });
  }

  AscSortData(){
    return this.l1.sort((a, b) => {
      return <any>new Date(a['BEGDA']) - <any>new Date(b['BEGDA']);
    });
  }

}
