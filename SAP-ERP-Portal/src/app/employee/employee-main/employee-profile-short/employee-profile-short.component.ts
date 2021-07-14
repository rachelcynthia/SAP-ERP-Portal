import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeProfileService } from 'src/app/service/employee/employee-profile.service';

@Component({
  selector: 'app-employee-profile-short',
  templateUrl: './employee-profile-short.component.html',
  styleUrls: ['./employee-profile-short.component.css']
})
export class EmployeeProfileShortComponent implements OnInit {

  constructor(private employeeService:EmployeeProfileService,private cookieService:CookieService) { }
  prof;
  ngOnInit(): void {
    this.employeeService.getDetails({"PERNR":this.cookieService.get("e_username")}).subscribe((data)=>{
      this.prof = data['P0002']
    })
  }

}
