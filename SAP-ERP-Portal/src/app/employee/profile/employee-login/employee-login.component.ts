import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeProfileService } from 'src/app/service/employee/employee-profile.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private cookieService:CookieService, private router: Router, private empProfService:EmployeeProfileService) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.empProfService.login({"USERNAME": form.value.username,"PASSWORD":form.value.password}).subscribe(data=>{
      if(data["RET"]=="S"){
        this.cookieService.set('e_username',form.value.username);
        this.cookieService.set('e_isLoggedIn',"true");
        // this.cookieService.set('username',"0000902289");
        this.router.navigateByUrl('/emp/dashboard')
      }
      else{
        alert("Login Failed, Try Again");
        this.cookieService.set('e_isLoggedIn',"false");
      }
    })
  }

}
