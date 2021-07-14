import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DeliverylistService } from 'src/app/service/customer/deliverylist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private deliveryService: DeliverylistService, private cookieService: CookieService,private router:Router) {
  }

  header;
  flag=1
  ngOnInit(): void {
    this.deliveryService.getListofDelivery({"CUSTOMER_NUMBER":this.cookieService.get('username')}).subscribe((data)=>{
      this.header = data["IT_DELIVERY_HEADER"]["item"];
    })
    console.log(this.header)
  }

  onClick(i) {
    this.deliveryService.setDelivery(i);
    this.router.navigateByUrl('cust/deliverylist/display')
  }
  
  onSort(){
    if(this.flag==1){this.header = this.DescSortData()}
    else{this.header = this.AscSortData()}
    console.log( this.header)
    this.flag = this.flag == 1?0:1;
  }

  DescSortData() {
    return this.header.sort((a, b) => {
      return <any>new Date(b['ERDAT']) - <any>new Date(a['ERDAT']);
    });
  }

  AscSortData(){
    return this.header.sort((a, b) => {
      return <any>new Date(a['ERDAT']) - <any>new Date(b['ERDAT']);
    });
  }


}
