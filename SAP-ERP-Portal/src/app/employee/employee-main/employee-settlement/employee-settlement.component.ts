import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-employee-settlement',
  templateUrl: './employee-settlement.component.html',
  styleUrls: ['./employee-settlement.component.css']
})
export class EmployeeSettlementComponent implements OnInit {

  constructor(private cookieService: CookieService, private employeeService: EmployeeMainService) { }
  det;
  earnings;
  deductions;
  pernr;
  ngOnInit(): void {
    // this.pernr = this.cookieService.get("e_username")
    this.pernr = "90000004"
    this.employeeService.getFFDet({"PERNR":this.cookieService.get("e_username")}).subscribe((data)=>{
      this.det = data
      
      if(Array.isArray(data["IT_DEDUCTIONS"]["item"])){
        this.deductions = data["IT_DEDUCTIONS"]["item"]
      }
      else{
        this.deductions = [data["IT_DEDUCTIONS"]["item"]]
      }

      this.earnings = data["IT_EARNINGS"]["item"]
      if(Array.isArray(data["IT_EARNINGS"]["item"])){
        this.earnings = data["IT_EARNINGS"]["item"]
      }
      else{
        this.earnings = [data["IT_EARNINGS"]["item"]]
      }
    })
  }
public downloadPDF()
{
var data = document.getElementById('full');
html2canvas(data).then(canvas => {
  var pdf = new jspdf.jsPDF('p', 'pt', [canvas.width, canvas.height]);
  var imgData  = canvas.toDataURL("image/jpeg", 1.0);
  pdf.addImage(imgData,0,0,canvas.width, canvas.height);
pdf.save('settlement.pdf');
});
}
}


