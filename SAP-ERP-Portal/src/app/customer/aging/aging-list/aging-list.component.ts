import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AgingService } from 'src/app/service/customer/aging.service';

@Component({
  selector: 'app-aging-list',
  templateUrl: './aging-list.component.html',
  styleUrls: ['./aging-list.component.css']
})
export class AgingListComponent implements OnInit {

  constructor(private agingService: AgingService, private router:Router, private cookieService:CookieService) { }
  aging;
  aging_list = []
  flag=1
  flag1=1;
  ngOnInit(): void {
    this.agingService.getList({ "CUSTOMER_NUM": this.cookieService.get("username") }).subscribe((data) => {
      this.aging = data;
      for (let i in data["IT_BSID"]["item"]) {
        this.aging_list.push({
          "DOC_NUM": data["IT_BSID"]["item"][i]['BELNR'],
          "POSTING_DATE": data["IT_BSID"]["item"][i]['BUDAT'], "DOC_DATE": data["IT_BSID"]["item"][i]['BLDAT'],
          "BASE_DATE": data["IT_BSID"]["item"][i]['ZFBDT'], "NET_PAY": data["IT_BSID"]["item"][i]['ZBD3T'],
          "NET_DATE": data["IT_DATES"]["item"][i]['NETDT'], "NET_DAYS": data["IT_DAYS"]["item"][i]['DAYS_NET'],
          "CASH_DIC_1": data["IT_BSID"]["item"][i]['ZBD1T'], "CASH_DISC_DATE": data["IT_DATES"]["item"][i]['SK1DT'],
          "CASH_DISC_DAYS": data["IT_DAYS"]["item"][i]['DAYS_CD1'],
          "CASH_DIC_2": data["IT_BSID"]["item"][i]['ZBD2T'], "CASH_DISC_DATE2": data["IT_DATES"]["item"][i]['SK2DT'],
          "CASH_DISC_DAYS2": data["IT_DAYS"]["item"][i]['DAYS_CD2']
        })
        console.log(this.aging_list)
        this.sortListDesc()
      }
    });
  }

  onSort(){
    if(this.flag==1){this.sortListAsc()}
    else{this.sortListDesc()}
    this.flag =this.flag == 1?0:1;

  }

  sortListAsc() {
    this.aging_list.sort((a, b) => a["NET_DAYS"] - b["NET_DAYS"])
  }
  sortListDesc(){
    this.aging_list.sort((a, b) => b["NET_DAYS"] - a["NET_DAYS"])
  }
  onClick(doc){
    this.agingService.setDocNum(doc);
    for(let i in this.aging["IT_BSID"]["item"]){
      if(this.aging["IT_BSID"]["item"][i]["BELNR"] == doc){
        this.agingService.setHeader(this.aging["IT_BSID"]["item"][i])
      }
    }
    this.router.navigateByUrl('/cust/aging/display')
   
  }

}
