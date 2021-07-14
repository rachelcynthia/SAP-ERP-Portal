import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeProfileService } from 'src/app/service/employee/employee-profile.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor(private profileService: EmployeeProfileService, private cookieService:CookieService, private router:Router) { }
  prof;
  prof1;
  ngOnInit(): void {
    this.profileService.getDetails({'PERNR':this.cookieService.get("e_username")}).subscribe((data)=>{
      this.prof = data['P0001']
      this.prof1 = data['P0002']
    })
  }
  onSubmit(){
    console.log(this.prof)
    this.profileService.editDetails({"P0001":this.prof,"P0002":this.prof1,"PERNR":this.cookieService.get("e_username")}).subscribe((data)=>{
      if(data["RET"]=="S"){
        alert("Details Updated")
        this.router.navigateByUrl('/emp/profile/display')
      }
      else{
        alert("Error Updating the details, Try again later.")
     }
    })
  }

  onCancel() {
    this.router.navigateByUrl('/emp/profile/display')
 }

}
