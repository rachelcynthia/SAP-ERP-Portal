import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {

  constructor(private cookieService:CookieService, private router:Router) { }

  ngOnInit(): void {
  }
  Logout(){
    this.cookieService.set("e_isLoggedIn","false")
    this.router.navigateByUrl('emp/login')
  }

}
