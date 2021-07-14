import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';

@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.css']
})
export class EmployeePayrollComponent implements OnInit {

  constructor(private employeeService: EmployeeMainService, private router:Router,private cookieService:CookieService) { }
  det;
  flag =1;
  ngOnInit(): void {
    this.employeeService.getPayroll({"PERNR":"5014"}).subscribe((data)=>{
      console.log(data)
      if(Array.isArray(data['RESULTS']['item'])){
        this.det = data['RESULTS']['item']
      }
      else{
        this.det =[data['RESULTS']['item']]
      }
    })
  }
  variant
  onClick(seq){
    this.variant =  prompt("Enter Variant")
    console.log(this.variant)
    this.employeeService.getPayslipDet({"PERNR":this.cookieService.get("e_username"),"SEQ":seq,"VARIANT":this.variant}).subscribe((data)=>{
      console.log(data)
      if(data["RETURN"]["TYPE"]==""){
        this.employeeService.setPay(data["PDF"])
        this.employeeService.paybool = true;
      }
      else{
        alert("Error Occured : "+data["RETURN"]["MESSAGE"])
      }
    })
    // this.router.navigateByUrl('/emp/pay/display')
  }
  onSort(){
    if(this.flag==0){this.det = this.DescSortData()}
    else{this.det = this.AscSortData()}
    console.log( this.det)
    this.flag = this.flag == 1?0:1;
  }

  DescSortData() {
    return this.det.sort((a, b) => {
      return <any>new Date(b['FPBEGIN']) - <any>new Date(a['FPBEGIN']);
    });
  }

  AscSortData(){
    return this.det.sort((a, b) => {
      return <any>new Date(a['FPBEGIN']) - <any>new Date(b['FPBEGIN']);
    });
  }

}
