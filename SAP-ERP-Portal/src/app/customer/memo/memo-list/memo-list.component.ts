import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MemoService } from 'src/app/service/customer/memo.service';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {

  constructor(private memoService:MemoService,private router:Router, private cookieService:CookieService) { }
  credit_memo;
  debit_memo
  flag1=1
  flag=1
  ngOnInit(): void {
    this.memoService.getMemoList({"CUSTOMER_NO": this.cookieService.get("username"), "DOC_TYPE": "O" }).subscribe((data)=>{
      this.credit_memo = data["IT_VBRK"]["item"]
      console.log(this.credit_memo)
      this.credit_memo = this.AscSortData(this.credit_memo)
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
    this.memoService.setDocNum(doc);
    this.router.navigateByUrl('/cust/memo/display')
  }

  onSort(){
    if(this.flag==1 ){this.credit_memo = this.DescSortData(this.credit_memo)}
    else if(this.flag==0){this.credit_memo = this.AscSortData(this.credit_memo)}
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
