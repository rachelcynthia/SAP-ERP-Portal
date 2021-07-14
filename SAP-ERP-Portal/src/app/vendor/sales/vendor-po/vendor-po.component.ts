import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-po',
  templateUrl: './vendor-po.component.html',
  styleUrls: ['./vendor-po.component.css']
})
export class VendorPoComponent implements OnInit {
  flag = 1;
  list1;
  constructor(private salesService: VendorSalesService, private router: Router,private cookieService:CookieService) { }

  ngOnInit(): void {
    this.salesService.getPOList({"VENDOR_NUMBER":this.cookieService.get("v_username")}).subscribe((data)=>{
      this.list1 = data["IT_LIST"]["item"]
      this.list1 = this.AscSortData()
    })
    }
  onClick(item) {
    this.salesService.setPO(item);
    this.router.navigateByUrl('/vend/sales/po/display')
  }
  onSort() {
    if (this.flag == 1) { this.list1 = this.DescSortData() }
    else { this.list1 = this.AscSortData() }
    console.log(this.list1)
    this.flag = this.flag == 1 ? 0 : 1;
  }

  DescSortData() {
    return this.list1.sort((a, b) => {
      return <any>new Date(b['BEDAT']) - <any>new Date(a['BEDAT']);
    });
  }

  AscSortData() {
    return this.list1.sort((a, b) => {
      return <any>new Date(a['BEDAT']) - <any>new Date(b['BEDAT']);
    });
  }
}
