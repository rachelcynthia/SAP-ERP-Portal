import { Component, OnInit } from '@angular/core';
import { faEdit} from '@fortawesome/free-solid-svg-icons'
import { CookieService } from 'ngx-cookie-service';
import { ProfileService } from 'src/app/service/customer/profile.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {
  customer;
  prof;
  faEdit = faEdit;
  constructor(private profileService:ProfileService,public cookieService:CookieService) { }

  ngOnInit(): void {
    this.profileService.viewDetails1({'CUSTOMERNO':this.cookieService.get("username")}).subscribe((data)=>{
      var arr = Object.keys(data["PE_PERSONALDATA"])
      var f = 0
      for(var i =0; i<arr.length;i++){
        if(data["PE_PERSONALDATA"][arr[i]]!=""){
          f += 1;
          break;
        }
      }
      if(f<3){
        this.prof = data["PE_PERSONALDATA_N"]
      }
      else{
        this.prof = data["PE_PERSONALDATA"]
      }
      
    })
    this.profileService.viewDetails({'CUSTOMERNO':this.cookieService.get("username")}).subscribe((data)=>{
      this.customer = data['WA_KNA1'];
      console.log(data['WA_KNA1'])
    });
  }

  onNum(dat){
    if(isNaN(dat*1)){
      return dat
    }
    return dat*1
  }

}
