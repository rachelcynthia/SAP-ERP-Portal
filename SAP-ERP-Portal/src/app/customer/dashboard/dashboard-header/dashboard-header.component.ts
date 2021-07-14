import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { faPowerOff,faUser,faCode } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

 faPower = faPowerOff;
  faUser = faUser;
  faCode =faCode;

  constructor(private cookieService: CookieService,private router:Router) { }

  ngOnInit(): void {
  }
  Logout(){
    this.cookieService.set('isLoggedIn',"false");
    console.log('here')
    this.router.navigateByUrl('/cust/login');
  }

  

}
