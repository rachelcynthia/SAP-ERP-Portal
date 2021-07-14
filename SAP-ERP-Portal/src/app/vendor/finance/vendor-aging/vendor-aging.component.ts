import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorFinanceService } from 'src/app/service/vendor/vendor-finance.service';

@Component({
  selector: 'app-vendor-aging',
  templateUrl: './vendor-aging.component.html',
  styleUrls: ['./vendor-aging.component.css']
})
export class VendorAgingComponent implements OnInit {
  aging;
  flag = 1;
  flag1=1;
  date
  aging_list = []
  constructor(private financeService: VendorFinanceService,private router:Router,private cookieService:CookieService) { 
    this.date=new Date()
  }

  ngOnInit(): void {
    this.financeService.getAgingList({ "VENDOR": this.cookieService.get("v_username") }).subscribe((data) => {
      this.aging = data;
      for (let i in data["IT_BSIK"]["item"]) {
        if (data["IT_BSIK"]["item"][i]['ZFBDT'] != '0000-00-00') {
          this.aging_list.push({
            "HEAD":data["IT_BSIK"]["item"][i],
            "DOC_NUM": data["IT_BSIK"]["item"][i]['BELNR'],
            "BASE_DATE": data["IT_BSIK"]["item"][i]['ZFBDT'], "NET_PAY": data["IT_BSIK"]["item"][i]['ZBD3T'],
            "NET_DATE": data["IT_DATES"]["item"][i]['NETDT'], "NET_DAYS": data["IT_DAYS"]["item"][i]['DAYS_NET'], 
            "CASH_DIC_1": data["IT_BSIK"]["item"][i]['ZBD1T'], "CASH_DISC_DATE": data["IT_DATES"]["item"][i]['SK1DT'],
            "CASH_DISC_DAYS": data["IT_DAYS"]["item"][i]['DAYS_CD1'],
            "CASH_DIC_2": data["IT_BSIK"]["item"][i]['ZBD2T'], "CASH_DISC_DATE2": data["IT_DATES"]["item"][i]['SK2DT'],
            "CASH_DISC_DAYS2": data["IT_DAYS"]["item"][i]['DAYS_CD2']
          })
        }
        console.log(this.aging_list)
        this.sortListDesc()
      }
    })
  }

  onSort() {
    if (this.flag == 1) { this.sortListAsc() }
    else { this.sortListDesc() }
    this.flag = this.flag == 1 ? 0 : 1;

  }

  sortListAsc() {
    this.aging_list.sort((a, b) => a["NET_DAYS"] - b["NET_DAYS"])
  }
  sortListDesc() {
    this.aging_list.sort((a, b) => b["NET_DAYS"] - a["NET_DAYS"])
  }
  onClick(doc) {
    this.financeService.setAging(doc["DOC_NUM"]);
    this.financeService.setAgingHead(doc["HEAD"]);
    console.log(doc)
    this.router.navigateByUrl('/vend/finance/aging/display')

  }

}
