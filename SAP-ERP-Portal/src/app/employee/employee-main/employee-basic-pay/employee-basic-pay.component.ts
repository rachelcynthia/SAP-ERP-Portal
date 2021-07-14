import { Component, OnInit } from '@angular/core';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';
import * as FileSaver from 'file-saver';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-employee-basic-pay',
  templateUrl: './employee-basic-pay.component.html',
  styleUrls: ['./employee-basic-pay.component.css']
})
export class EmployeeBasicPayComponent implements OnInit {

  constructor(private employeeService:EmployeeMainService,private cookieService:CookieService) { }
  pdfSrc;
  pdf;
  ngOnInit(): void {
    this.employeeService.getBasicPayDet({"PERNR":this.cookieService.get("e_username")}).subscribe((data)=>{
      this.pdf=data["PDF"]
      this.pdfSrc = 'data:application/pdf;base64,' + data["PDF"]
    })
  }
  onClick(){
    FileSaver.saveAs(this.pdfSrc, "BasicPay.pdf");
  }
}
