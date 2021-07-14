import { Component, OnInit } from '@angular/core';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';

@Component({
  selector: 'app-employee-project',
  templateUrl: './employee-project.component.html',
  styleUrls: ['./employee-project.component.css']
})
export class EmployeeProjectComponent implements OnInit {

  constructor(private employeeService:EmployeeMainService) { }
  proj

  ngOnInit(): void {
    this.employeeService.getProjDet({'WBS':this.employeeService.getProj()}).subscribe((data)=>{
      this.proj = data['WA_PRPS'];
    })
  }

}
