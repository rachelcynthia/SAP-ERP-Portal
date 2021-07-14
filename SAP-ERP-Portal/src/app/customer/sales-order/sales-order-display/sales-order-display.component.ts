import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SalesorderService } from 'src/app/service/customer/salesorder.service';

@Component({
  selector: 'app-sales-order-display',
  templateUrl: './sales-order-display.component.html',
  styleUrls: ['./sales-order-display.component.css']
})
export class SalesOrderDisplayComponent implements OnInit {

  header:object;
  items:object;
  s_i=0;
  date;
  
  constructor(private salesorderService:SalesorderService,private cookieService:CookieService, private router:Router) { }

  ngOnInit(): void {
    this.date = new Date()
    this.salesorderService.getSalesOrderDetails({"SALES_DOC": this.salesorderService.getSalesDoc()}).subscribe((data)=>{
      if(data['ORDER_HEADER']==""){
        alert("The given saleorder does not exist")
        this.router.navigateByUrl('cust/saleorder/display-form')
      }
      this.header = data['ORDER_HEADER']['item'];
      if(this.header['SOLD_TO']!=this.cookieService.get('username')){
        alert("The given saleorder is not accessible by this customer")
        this.router.navigateByUrl('cust/saleorder/display-form')
      }
      if(Array.isArray(data["ORDER_DATA"]["item"])){
        this.items = data["ORDER_DATA"]["item"];
      }
      else{
      this.items = [data["ORDER_DATA"]["item"]];
      }
    })
  }

  clickedRow(index:number){
    this.s_i = index;
  }

  onNum(dat){
    
    if(isNaN(dat*1)){
      return dat
    }
    return dat*1
  }
  
  

}
