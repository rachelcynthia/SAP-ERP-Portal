import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SalesorderService } from 'src/app/service/customer/salesorder.service';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.css']
})
export class SalesOrderListComponent implements OnInit {
  details = {
    CUSTOMER:this.cookieService.get("username"),
    SALES_ORG: ""
  }
  tab_det;
  flag=1;
  constructor(private cookieService:CookieService,private salesorderService:SalesorderService, private router:Router) { }

  ngOnInit(): void {
    this.salesorderService.getSalesOrderList(this.details).subscribe((data)=>{
      this.tab_det = data['SALES_ORDERS']['item']
      this.tab_det = this.AscSortData()
    })
  }
  onClick(item){
    this.salesorderService.setSalesDoc(item);
    this.router.navigateByUrl('/cust/saleorder/display')
  }
  onSort(){
    if(this.flag==1){this.tab_det = this.DescSortData()}
    else{this.tab_det = this.AscSortData()}
    console.log( this.tab_det)
    this.flag = this.flag == 1?0:1;
  }

  DescSortData() {
    return this.tab_det.sort((a, b) => {
      return <any>new Date(b['DOC_DATE']) - <any>new Date(a['DOC_DATE']);
    });
  }

  AscSortData(){
    return this.tab_det.sort((a, b) => {
      return <any>new Date(a['DOC_DATE']) - <any>new Date(b['DOC_DATE']);
    });
  }

}
