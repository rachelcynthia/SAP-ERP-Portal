import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-rfq',
  templateUrl: './vendor-rfq.component.html',
  styleUrls: ['./vendor-rfq.component.css']
})
export class VendorRfqComponent implements OnInit {

  flag=1
  constructor(private salesService:VendorSalesService,private router:Router,private cookieService:CookieService) { }
  list1;
  ngOnInit(): void {
    this.salesService.getRFQList({"VENDOR_NO":this.cookieService.get("v_username")}).subscribe((data)=>{
      console.log(data)
      this.list1 = data["TY_EKKO"]["item"]
      this.list1 = this.AscSortData()
    })
  }
  onClick(item){
    this.salesService.setRFQ(item);
    this.router.navigateByUrl('/vend/sales/rfq/display')
  }
  onSort(){
    if(this.flag==1){this.list1 = this.DescSortData()}
    else{this.list1 = this.AscSortData()}
    console.log( this.list1)
    this.flag = this.flag == 1?0:1;
  }

  DescSortData() {
    return this.list1.sort((a, b) => {
      return <any>new Date(b['BEDAT']) - <any>new Date(a['BEDAT']);
    });
  }

  AscSortData(){
    return this.list1.sort((a, b) => {
      return <any>new Date(a['BEDAT']) - <any>new Date(b['BEDAT']);
    });
  }

}
