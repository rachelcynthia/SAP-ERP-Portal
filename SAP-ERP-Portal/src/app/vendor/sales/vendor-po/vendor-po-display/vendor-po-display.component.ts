import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-po-display',
  templateUrl: './vendor-po-display.component.html',
  styleUrls: ['./vendor-po-display.component.css']
})
export class VendorPoDisplayComponent implements OnInit {

  constructor(private salesService:VendorSalesService,private router:Router,private cookieService:CookieService) { }

  header;
  items;

  ngOnInit(): void {
    this.salesService.getPODetails({"DOC_NUM":this.salesService.getPO()}).subscribe((data)=>{
      if(data["PO_HEADER"]==""){
        alert("The given PO does not exist")
        this.router.navigateByUrl('/vend/sales/po/list')
      }
      this.header = data["PO_HEADER"]
      if(this.header["VENDOR"]!=this.cookieService.get("v_username")){
        alert("The given PO can't be accessed by the vendor")
        this.router.navigateByUrl('/vend/sales/po/list')
      }
      if(Array.isArray(data["PO_ITEMS"]["item"])){
        this.items = data["PO_ITEMS"]["item"]
      }
      else{
        this.items= [data["PO_ITEMS"]["item"]]
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
