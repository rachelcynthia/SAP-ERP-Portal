import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DeliverylistService } from 'src/app/service/customer/deliverylist.service';

@Component({
  selector: 'app-deliverydisplay',
  templateUrl: './deliverydisplay.component.html',
  styleUrls: ['./deliverydisplay.component.css']
})
export class DeliverydisplayComponent implements OnInit {

  header;
  items;
  constructor(private deliveryService: DeliverylistService, private cookieService: CookieService, private router:Router) { }

ngOnInit(): void {
  console.log(this.deliveryService.getDelivery())
  this.deliveryService.getDeliveryDetails({"DELIVERY_DOC":this.deliveryService.getDelivery()}).subscribe((data)=>{
    
    if(data['DELIVERY_HEADER']==""){
      alert("The given delivery document does not exist")
      this.router.navigateByUrl('cust/deliverylist/display-form')
    }
    this.header = data["DELIVERY_HEADER"]
    console.log(data['DELIVERY_HEADER']['KUNNR'])
    if(this.header['KUNNR']!=this.cookieService.get('username')){
      alert("The given delivery document is not accessible by this customer")
      this.router.navigateByUrl('cust/deliverylist/display-form')
    }
    
    if(Array.isArray(data["IT_DELIVERY_ITEM"]["item"])){
      this.items = data["IT_DELIVERY_ITEM"]["item"];
    }
    else{
      this.items = [data["IT_DELIVERY_ITEM"]["item"]]
    }
  })
  }
  onNum(dat){
    
    if(isNaN(dat*1)){
      return dat
    }
    return dat*1
  }

}
