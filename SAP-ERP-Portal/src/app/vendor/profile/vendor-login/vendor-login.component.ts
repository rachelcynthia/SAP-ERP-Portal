import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProfileService } from 'src/app/service/vendor/profile.service';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  constructor(private cookieService:CookieService, private loginService:ProfileService, private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.loginService.login({"USERNAME": form.value.username,"PASSWORD":form.value.password}).subscribe(data=>{
      if(data["RESULT"]=="SUCCESS"){
        this.cookieService.set('v_username',form.value.username);
        this.cookieService.set('v_isLoggedIn',"true");
        // this.cookieService.set('username',"0000902289");
        this.route.navigateByUrl('/vend/sales')
      }
      else{
        alert("Login Failed, Try Again");
        this.cookieService.set('v_isLoggedIn',"false");
      }
    })
  }
}
