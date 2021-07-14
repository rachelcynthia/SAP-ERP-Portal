import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPowerOff,faUser,faCode } from '@fortawesome/free-solid-svg-icons'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vendor-header',
  templateUrl: './vendor-header.component.html',
  styleUrls: ['./vendor-header.component.css']
})
export class VendorHeaderComponent implements OnInit {

  faPower = faPowerOff;
  faUser = faUser;
  faCode =faCode;
  constructor(private cookieService:CookieService,private router:Router) { }

  ngOnInit(): void {
  }
  Logout(){
    this.cookieService.set('v_isLoggedIn',"false");
    console.log('here')
    this.router.navigateByUrl('/vend/login');
  }

}
