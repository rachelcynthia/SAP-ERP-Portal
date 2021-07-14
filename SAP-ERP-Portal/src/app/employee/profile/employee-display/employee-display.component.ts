import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeProfileService } from 'src/app/service/employee/employee-profile.service';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {

  constructor(private cookieService:CookieService, private profileService:EmployeeProfileService) { }
  prof
  prof1
  ngOnInit(): void {
    this.profileService.getDetails({'PERNR':this.cookieService.get("e_username")}).subscribe((data)=>{
      this.prof = data['P0001']
      this.prof1 = data['P0002']
    })
  }

}
