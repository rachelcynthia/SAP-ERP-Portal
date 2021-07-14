import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/service/customer/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private cookieService: CookieService,private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.loginService.login(form.value.username,form.value.password).subscribe(data=>{
      if(data["isSuccess"]==true){
        this.cookieService.set('username',form.value.username);
        this.cookieService.set('isLoggedIn',"true");
        // this.cookieService.set('username',"0000902289");
        this.route.navigateByUrl('/cust/dashboard')
      }
      else{
        alert("Login Failed, Try Again");
        this.cookieService.set('isLoggedIn',"false");
      }
    })
  }

}
