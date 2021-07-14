import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProfileService } from 'src/app/service/vendor/profile.service';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.css']
})
export class VendorViewComponent implements OnInit {

  constructor(private profileService:ProfileService,private cookieService:CookieService) { }
  prof;
  ngOnInit(): void {
    this.profileService.getDetails({ "VENDOR_NUMBER":this.cookieService.get("v_username")}).subscribe((data)=>{
      this.prof = data["TY_LFA1"];
      console.log(data)
    })
  }

  onNum(d){
    if(isNaN(d*1)){
      return d
    }
    return d*1
  }

}
