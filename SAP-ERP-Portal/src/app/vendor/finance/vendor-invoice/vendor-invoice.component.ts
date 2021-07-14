import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorFinanceService } from 'src/app/service/vendor/vendor-finance.service';

@Component({
  selector: 'app-vendor-invoice',
  templateUrl: './vendor-invoice.component.html',
  styleUrls: ['./vendor-invoice.component.css']
})
export class VendorInvoiceComponent implements OnInit {
  
  flag=1;
  list1;
  constructor(private financeService: VendorFinanceService, private router: Router,private cookieService:CookieService) {
    
   }

  ngOnInit(): void {
    this.financeService.getInvList({"VENDOR":this.cookieService.get("v_username")}).subscribe((data)=>{
      this.list1 = data["HEADERLIST"]["item"]
      this.list1 = this.AscSortData()
    })
  }
  onClick(item,year) {
    this.financeService.setInv(item);
    this.financeService.setFisc(year);
    this.router.navigateByUrl('/vend/finance/invoice/display')
  }
  onSort() {
    if (this.flag == 1) { this.list1 = this.DescSortData() }
    else { this.list1 = this.AscSortData() }
    console.log(this.list1)
    this.flag = this.flag == 1 ? 0 : 1;
  }

  DescSortData() {
    return this.list1.sort((a, b) => {
      return <any>new Date(b['ENTRY_DATE']) - <any>new Date(a['ENTRY_DATE']);
    });
  }

  AscSortData() {
    return this.list1.sort((a, b) => {
      return <any>new Date(a['ENTRY_DATE']) - <any>new Date(b['ENTRY_DATE']);
    });
  }

}
