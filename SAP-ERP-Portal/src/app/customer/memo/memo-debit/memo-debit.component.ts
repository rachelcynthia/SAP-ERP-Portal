import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MemoService } from 'src/app/service/customer/memo.service';

@Component({
  selector: 'app-memo-debit',
  templateUrl: './memo-debit.component.html',
  styleUrls: ['./memo-debit.component.css']
})
export class MemoDebitComponent implements OnInit {

  constructor(private memoService:MemoService,private router:Router,private cookieService:CookieService) { }
  debit_memo;
  flag=1;
  ngOnInit(): void {
    this.memoService.getMemoList({"CUSTOMER_NO": this.cookieService.get("username"), "DOC_TYPE": "P" }).subscribe((data)=>{
      this.debit_memo = data["IT_VBRK"]["item"]
    })
  }
  onClick(doc){
    this.memoService.setDocNum(doc);
    this.router.navigateByUrl('/cust/memo/display')
  }

  onSort(){
    if(this.flag==1 ){this.debit_memo = this.DescSortData(this.debit_memo)}
    else if(this.flag==0){this.debit_memo = this.AscSortData(this.debit_memo)}
    this.flag = this.flag == 1?0:1;
  }

  DescSortData(table_data) {
    return table_data.sort((a, b) => {
      return <any>new Date(b['ERDAT']) - <any>new Date(a['ERDAT']);
    });
  }
  AscSortData(table_data) {
    return table_data.sort((a, b) => {
      return <any>new Date(a['ERDAT']) - <any>new Date(b['ERDAT']);
    });
  }
}
