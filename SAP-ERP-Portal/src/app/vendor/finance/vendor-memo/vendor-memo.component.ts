import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VendorFinanceService } from 'src/app/service/vendor/vendor-finance.service';

@Component({
  selector: 'app-vendor-memo',
  templateUrl: './vendor-memo.component.html',
  styleUrls: ['./vendor-memo.component.css']
})
export class VendorMemoComponent implements OnInit {

  constructor(private financeService: VendorFinanceService, private router: Router,private cookieService:CookieService) { }
  credit_memo;
  debit_memo
  flag1=1
  flag=1
  ngOnInit(): void {
    this.financeService.getMemoList({"VENDOR": this.cookieService.get("v_username"), "DOC_TYPE": "H" }).subscribe((data)=>{
      this.credit_memo = data["IT_BSIK"]["item"]
      console.log(this.credit_memo)
      this.credit_memo = this.AscSortData(this.credit_memo)
    })
    this.financeService.getMemoList({"VENDOR": "SA100200", "DOC_TYPE": "S" }).subscribe((data)=>{
      this.debit_memo = data["IT_BSIK"]["item"]
    })
  }
  
  onMemo(str){
    if(str=='credit'){
      this.flag1=1
      this.flag=1
    }
    else{
      this.flag1=0
      this.flag=1
    }
  }
  onClick(doc){
    this.financeService.setMemo(doc['BELNR']);
    this.financeService.setMemoHead(doc)
    this.router.navigateByUrl('/vend/finance/memo/display')
  }

  onSort(){
    if(this.flag==1 && this.flag1==1){this.credit_memo = this.DescSortData(this.credit_memo)}
    else if(this.flag==1 && this.flag1==0){this.debit_memo = this.DescSortData(this.debit_memo)}
    else if(this.flag==0 && this.flag1==0){this.debit_memo = this.AscSortData(this.debit_memo)}
    else if(this.flag==0 && this.flag1==1){this.credit_memo = this.AscSortData(this.credit_memo)}
    this.flag = this.flag == 1?0:1;
  }

  DescSortData(table_data) {
    return table_data.sort((a, b) => {
      return <any>new Date(b['CPUDT']) - <any>new Date(a['CPUDT']);
    });
  }
  AscSortData(table_data) {
    return table_data.sort((a, b) => {
      return <any>new Date(a['CPUDT']) - <any>new Date(b['CPUDT']);
    });
  }

}
