import { Component, OnInit } from '@angular/core';
import { faCube, faCubes, faCircleNotch, faMoneyBillWaveAlt, faFileInvoiceDollar, faMoneyCheck, faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeMainService } from 'src/app/service/employee/employee-main.service';
import { EmployeeProfileService } from 'src/app/service/employee/employee-profile.service';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css']
})
export class EmployeeMainComponent implements OnInit {
  prof;
  dis = false
  constructor(private profileService:EmployeeProfileService, public employeeService:EmployeeMainService,private cookieService:CookieService) { 
    this.profileService.getDetails({"PERNR":this.cookieService.get("e_username")}).subscribe((data)=>{
      this.prof = data["P0002"]
      if(data['P0001']['PERSG']=='S' || data['P0001']['PERSG']=='R' || data['P0001']['PERSG']=='T' || data['P0001']['PERSG']=='Y'){
        console.log(this.dis)
        this.dis = true
      }   
    })
  }
  faCube = faCube;
  faCubes = faCubes;
  faPlus = faPlusCircle;
  faCircle = faCircleNotch;
  faMoney = faMoneyBillWaveAlt;
  faFile = faFileInvoiceDollar;
  faMoney1 = faCommentDollar;
  faMoney2 = faMoneyCheck;
  select = 0;

  ngOnInit(): void {
    let s = document.createElement('script');
s.setAttribute('src','https://cdn.cai.tools.sap/webchat/webchat.js');
s.setAttribute('channelId', 'b3b23abc-6716-48ce-b3ba-9b253eecd2f9');
s.setAttribute('token', '7428fa8d5725e20c224697ea1c8821cd');
s.setAttribute('id', 'cai-webchat');
document.body.appendChild(s);
  }

  dash(){
    this.select = 0;
    this.employeeService.bool = false;
  }

}
