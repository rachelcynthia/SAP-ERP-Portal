import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/customer/profile.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-profile-edit',
   templateUrl: './profile-edit.component.html',
   styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
   faEdit = faEdit;

   res;
   customer;
   customer1;
   personal_data = {
      "TITLE_P":"",
      "FIRSTNAME": "",
      "LASTNAME": "",
      "MIDDLENAME": "",
      "SECONDNAME": "",
      "DATE_BIRTH": "",
      "CITY": "",
      "DISTRICT": "",
      "POSTL_COD1": "",
      "POSTL_COD2": "",
      "PO_BOX": "",
      "PO_BOX_CIT": "",
      "STREET": "",
      "HOUSE_NO": "",
      "BUILDING": "",
      "FLOOR": "",
      "ROOM_NO": "",
      "COUNTRY": "",
      "COUNTRYISO": "",
      "REGION": "",
      "TEL1_NUMBR": "",
      "TEL1_EXT": "",
      "FAX_NUMBER": "",
      "FAX_EXTENS": "",
      "E_MAIL": "",
      "LANGU_P": "",
      "LANGUP_ISO": "",
      "CURRENCY": "",
      "CURRENCY_ISO": "",
      "TITLE_KEY": "",
      "ONLY_CHANGE_COMADDRESS": ""
   }
   personal_datax = {
      "TITLE_P":"",
      "FIRSTNAME": "",
      "LASTNAME": "",
      "MIDDLENAME": "",
      "SECONDNAME": "",
      "DATE_BIRTH": "",
      "CITY": "",
      "DISTRICT": "",
      "POSTL_COD1": "",
      "POSTL_COD2": "",
      "PO_BOX": "",
      "PO_BOX_CIT": "",
      "STREET": "",
      "HOUSE_NO": "",
      "BUILDING": "",
      "FLOOR": "",
      "ROOM_NO": "",
      "COUNTRY": "",
      "COUNTRYISO": "",
      "REGION": "",
      "TEL1_NUMBR": "",
      "TEL1_EXT": "",
      "FAX_NUMBER": "",
      "FAX_EXTENS": "",
      "E_MAIL": "",
      "LANGU_P": "",
      "LANGUP_ISO": "",
      "CURRENCY": "",
      "CURRENCY_ISO": "",
      "TITLE_KEY": "",
      "ONLY_CHANGE_COMADDRESS": ""
   }
   constructor(private profileService: ProfileService,public cookieService:CookieService, private router:Router) { }

   ngOnInit(): void {
      this.profileService.viewDetails1({"CUSTOMERNO":this.cookieService.get("username")}).subscribe((data) => {
         var arr = Object.keys(data["PE_PERSONALDATA"])
      var f = 0
      for(var i =0; i<arr.length;i++){
        if(data["PE_PERSONALDATA"][arr[i]]!=""){
            console.log(arr[i])
          f+= 1;
          break;
        }
      }
      console.log("f"+f)
      if(f<3){
        this.customer = data["PE_PERSONALDATA_N"]
      }
      else{
        this.customer = data["PE_PERSONALDATA"]
      }
         // this.customer = data['PE_PERSONALDATA'];
         this.personal_data.TITLE_P = this.customer['TITLE_P'];
         this.personal_datax.TITLE_P = 'X'
         this.personal_data.FIRSTNAME = this.customer['FIRSTNAME'];
         this.personal_datax.FIRSTNAME = 'X'
         this.personal_data.LASTNAME = this.customer['LASTNAME'];
         this.personal_datax.LASTNAME = 'X'
         this.personal_data.HOUSE_NO = this.customer['HOUSE_NO']
         this.personal_datax.HOUSE_NO = 'X'
         this.personal_data.STREET = this.customer['STREET']
         this.personal_datax.STREET = 'X'
         this.personal_data.COUNTRY = this.customer['COUNTRY']
         this.personal_datax.COUNTRY='X'
         this.personal_data.POSTL_COD1 = this.customer['POSTL_COD1'];
         this.personal_datax.POSTL_COD1 = 'X'
         this.personal_data.BUILDING = this.customer['BUILDING']
         this.personal_datax.BUILDING = 'X'
         this.personal_data.CITY = this.customer['CITY']
         this.personal_datax.CITY = 'X'
         this.personal_data.REGION  = this.customer['REGION']
         console.log(this.personal_data.REGION);
         this.personal_datax.REGION = 'X'
         this.personal_data.LANGU_P = this.customer['LANGU_P']
         this.personal_datax.LANGU_P = 'X'
         this.personal_data.CURRENCY = this.customer['CURRENCY']
         this.personal_datax.CURRENCY = 'X'
      })
      this.profileService.viewDetails({"CUSTOMERNO":this.cookieService.get("username")}).subscribe((data)=>{
         this.customer1 = data['WA_KNA1'];
      })
   }
   onSubmit() {

      //   for(let x in this.data["PI_PERSONALDATA"]){
      //    if(this.data["PI_PERSONALDATA"][x]!=""){
      //       this.data["PI_PERSONALDATAX"][x]='X';
      //    }
      //   }
      console.log(this.personal_data);
      this.profileService.editDetails({"CUSTOMERNO":this.cookieService.get("username"),"PI_PERSONALDATA":this.personal_data,"PI_PERSONALDATAX":this.personal_datax}).subscribe((data) => {
         if(data["RETURN"]["TYPE"] == ''){
            alert('Details Updated!');
            this.router.navigateByUrl('/cust/profile')
         }
         else{
            alert("Error : " + data["RETURN"]["MESSAGE"])
         }
      })

     
   }

   onCancel() {
      this.router.navigateByUrl('/cust/profile')
   }
   onNum(dat){
      if(isNaN(dat*1)){
        return dat
      }
      return dat*1
    }

}
