import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';

@Component({
  selector: 'app-employee-display-form-payslip',
  templateUrl: './employee-display-form-payslip.component.html',
  styleUrls: ['./employee-display-form-payslip.component.css']
})
export class EmployeeDisplayFormPayslipComponent implements OnInit {

  constructor(private employeeService:EmployeeMainService, private router:Router,private cookieService:CookieService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value)
    this.employeeService.getPayslipDet({"PERNR":this.cookieService.get("e_username"),"SEQ":form.value.year,"VARIANT":form.value.year1}).subscribe((data)=>{
      console.log(data)
      if(data["RETURN"]["TYPE"]==""){
        this.employeeService.setPay(data["PDF"])
        this.employeeService.paybool = true;
      }
      else{
        alert("Error Occured : "+data["RETURN"]["MESSAGE"])
      }
      
    })
  }

}
