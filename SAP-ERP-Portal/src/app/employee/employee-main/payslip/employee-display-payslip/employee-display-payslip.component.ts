import { Component, OnInit } from '@angular/core';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-employee-display-payslip',
  templateUrl: './employee-display-payslip.component.html',
  styleUrls: ['./employee-display-payslip.component.css']
})
export class EmployeeDisplayPayslipComponent implements OnInit {

  constructor(private employeeService: EmployeeMainService) { }
  pdf;
  pdfSrc
  ngOnInit(): void {
    this.pdf = this.employeeService.getPay()
      this.pdfSrc = 'data:application/pdf;base64,' + this.pdf

  }
  onClick(){
    FileSaver.saveAs(this.pdfSrc, "Payslip.pdf");
  }

}
