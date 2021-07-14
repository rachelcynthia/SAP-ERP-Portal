import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faCircle,faInfoCircle,faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  faCircle = faCircle;
  faInfoCircle = faInfoCircle;
  faArrow = faArrowCircleRight;

  constructor(private router:Router,private cookieService:CookieService) {
    this.cookieService.set("isLoggedIn","false");
    this.cookieService.set("v_isLoggedIn","false");
    this.cookieService.set("e_isLoggedIn","false");

   }

 
  ngOnInit(): void {

  }

  onClick(){
    this.router.navigateByUrl('/cust/login')
  }
  onVendor(){
    this.router.navigateByUrl('/vend/login')
  }
  onEmployee(){
    this.router.navigateByUrl('/emp/login')
  }

}
