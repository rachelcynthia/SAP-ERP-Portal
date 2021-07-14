import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';

@Component({
  selector: 'app-employee-leave-create',
  templateUrl: './employee-leave-create.component.html',
  styleUrls: ['./employee-leave-create.component.css']
})
export class EmployeeLeaveCreateComponent implements OnInit {
  @ViewChild('leaveForm') form:NgForm;
  leave
  constructor(private employeeService:EmployeeMainService, private router:Router, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.leave = this.employeeService.getLeaveCriteria()
  
  }
  ngAfterViewInit(){
    console.log(this.form.value)
    // this.employeeService.setLeaveCriteria('fghj')
    // this.form.controls['leave_ty'].setValue(this.employeeService.getLeaveCriteria())
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.employeeService.createLeaveReq({"END_DATE": form.value.e_date,
    "LEAVE_TYPE": form.value.leave_ty,
    "PERNR": "6",
    "START_DATE": form.value.e_date}).subscribe(data=>{
      if(data["RETURN"]["TYPE"]=="E"){
        alert('An error occured: '+ data["RETURN"]["MESSAGE"])
        // this.router.navigateByUrl('/emp/leave/create')
      }
      else{
        alert("Leave Request Created Successfully!")
        // this.router.navigateByUrl('/emp/leave/create')
      }
    })
  }

}
