import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-gr-display',
  templateUrl: './vendor-gr-display.component.html',
  styleUrls: ['./vendor-gr-display.component.css']
})
export class VendorGrDisplayComponent implements OnInit {

  constructor(private salesService:VendorSalesService,private cookieService:CookieService,private router:Router) { }
  header;
  items;
  s_i=0;
  ngOnInit(): void {
    this.salesService.getGoodsDetails({
      "MATERIAL":this.salesService.getGoods(),
      "YEAR":this.salesService.getGoodsYear()}).subscribe((data)=>{
        if(data['GOODSMVT_HEADER']==""){
          alert("The given goods request does not exist")
        this.router.navigateByUrl('/vend/sales/gr/list')
        }
      this.header = data['GOODSMVT_HEADER']

      if(Array.isArray(data["GOODSMVT_ITEMS"]["item"])){
        this.items = data["GOODSMVT_ITEMS"]["item"]
      }
      else{
        this.items = [data["GOODSMVT_ITEMS"]["item"]]
      }
      if(this.items[0]["VENDOR"]!=this.cookieService.get("v_username")){
        alert("The given goods request can't be accessed by the vendor")
        this.router.navigateByUrl('/vend/sales/gr/list')
      }
    })
  }

  clickedRow(i){
    this.s_i = i
    console.log(this.s_i)
  }

  onNum(d){
    if(isNaN(d*1)){
      return d
    }
    return d*1;
  }

}
