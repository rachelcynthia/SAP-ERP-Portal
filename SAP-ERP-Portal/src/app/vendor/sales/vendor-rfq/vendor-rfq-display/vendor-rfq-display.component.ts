import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SalesorderService } from 'src/app/service/customer/salesorder.service';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-rfq-display',
  templateUrl: './vendor-rfq-display.component.html',
  styleUrls: ['./vendor-rfq-display.component.css']
})
export class VendorRfqDisplayComponent implements OnInit {

  constructor(private salesService:VendorSalesService,private router:Router, private cookieService:CookieService) { }
  items;
  header;
  ngOnInit(): void {
    this.salesService.getRFQDetails({"DOC_NUM":this.salesService.getRFQ()}).subscribe((data)=>{
      if(data["WA_EKKO"]==""){
        alert("The given PO does not exist")
        this.router.navigateByUrl('/vend/sales/rfq/list')
      }
      this.header = data["WA_EKKO"]
      if(this.header["LIFNR"]!=this.cookieService.get("v_username")){
        alert("The given PO can't be accessed by the vendor")
        this.router.navigateByUrl('/vend/sales/rfq/list')
      }
      
      if(Array.isArray(data["IT_EKPO"]["item"])){
        this.items = data["IT_EKPO"]["item"]
      }
      else{
        this.items= [data["IT_EKPO"]["item"]]
      }
    })
  }

  onNum(dat){
    
    if(isNaN(dat*1)){
      return dat
    }
    return dat*1
  }

}
