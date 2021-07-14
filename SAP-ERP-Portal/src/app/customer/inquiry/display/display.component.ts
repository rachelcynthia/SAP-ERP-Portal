import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { InquiryService } from 'src/app/service/customer/inquiry.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  items:object;
  header:object;
  s_i = 0;
  date;
  constructor(private inquiryService:InquiryService,private cookieService:CookieService, private router:Router) {
    this.date = new Date()
  
    //this.inquiryService.setDocNum('0010000100');
    this.inquiryService.getDetails(this.inquiryService.getDocNum()).subscribe((data)=>{
      this.header = data["INQUIRY_HEAD"];
      if(this.header['SOLD_TO']!=this.cookieService.get('username')){
        alert('The selected document cannot be viewed for this customer')
        this.router.navigateByUrl('cust/inquiry/display-form')
      }
      else if(data["RETURN"]!=""){
        alert("The document number given does not exist");
        this.router.navigateByUrl('cust/inquiry/display-form')
      }
      else{
        if(Array.isArray(data["INQUIRY_ITEMS"]["item"])){
          this.items = data["INQUIRY_ITEMS"]["item"];
        }
        else{
        this.items = [data["INQUIRY_ITEMS"]["item"]];
        }
        console.log(this.items)
        console.log(data);
      }
     
    });
   }

  
  ngOnInit(): void {
  }
 
  clickedRow(index:number){
    this.s_i = index;
  }
  onNum(dat){
    
    if(isNaN(dat*1)){
      return dat
    }
    return dat*1
  }

}
