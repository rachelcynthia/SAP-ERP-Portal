import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-gr',
  templateUrl: './vendor-gr.component.html',
  styleUrls: ['./vendor-gr.component.css']
})
export class VendorGrComponent implements OnInit {
  flag=1;
  list1;
  constructor(private salesService: VendorSalesService, private router: Router,private cookieService:CookieService) { }

  ngOnInit(): void {
  this.salesService.getGoodsList({"VENDOR":this.cookieService.get("v_username")}).subscribe((data)=>{
    this.list1 = data["IT_MSEG"]["item"];
    this.list1 = this.AscSortData()
  })
  }
  onClick(item,year) {
    this.salesService.setGoods(item);
    this.salesService.setGoodsYear(year)
    this.router.navigateByUrl('/vend/sales/gr/display')
  }
  onSort() {
    if (this.flag == 1) { this.list1 = this.DescSortData() }
    else { this.list1 = this.AscSortData() }
    console.log(this.list1)
    this.flag = this.flag == 1 ? 0 : 1;
  }

  DescSortData() {
    return this.list1.sort((a, b) => {
      return <any>new Date(b['CPUDT_MKPF']) - <any>new Date(a['CPUDT_MKPF']);
    });
  }

  AscSortData() {
    return this.list1.sort((a, b) => {
      return <any>new Date(a['CPUDT_MKPF']) - <any>new Date(b['CPUDT_MKPF']);
    });
  }

}
