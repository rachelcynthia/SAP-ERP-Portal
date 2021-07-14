import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MemoService } from 'src/app/service/customer/memo.service';
import { faCircle,faSquare } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-memo-display',
  templateUrl: './memo-display.component.html',
  styleUrls: ['./memo-display.component.css']
})
export class MemoDisplayComponent implements OnInit {

  constructor(private memoService: MemoService, private router:Router) { }
  header;
  items;
  flag = 1
  s_i;
  price;
  names;
  faCircle = faCircle;
  faSquare = faSquare;
  ngOnInit(): void {
    this.memoService.getMemoDetail({ "BILLING_DOC": this.memoService.getDocNum() }).subscribe((data) => {
      this.header = data["IT_VBRK"]["item"]
      if(data["IT_VBRK"]==""){
        alert("The memo number given does not exist")
        this.router.navigateByUrl('/cust/memo/display-form')
      }
      if(this.header["KUNAG"]!="0000000018"){
        alert("The memo number given cannot be viewed for this customer")
        this.router.navigateByUrl('/cust/memo/display-form')
      }
      console.log(data["IT_VBRP"]["item"])
      this.items = Array.isArray(data["IT_VBRP"]["item"]) ? data["IT_VBRP"]["item"] : [data["IT_VBRP"]["item"]]
    })
    // this.memoService.getMemoPrice()
    console.log(this.flag)
  }
  bill;
  bill_list = [];
  tot_amount = 0;
  onClick(str, cond) {
    console.log(str);
    this.s_i = str;
    this.memoService.getMemoPrice({
      "DOC_COND": cond,
      "ITEM": str
    }).subscribe((data) => {
      this.price = data["IT_KONV"]["item"]
      this.names = data["IT_NAMES"]["item"]
      for (let i in this.price) {
        // console.log(this.tot_amount)
        var a = 0
        var b = 0
        a = parseInt(this.price[i]['KBETR'])
        b = this.Calc(this.price[i], a)
        this.tot_amount += b
        console.log(a, this.price[i]["KOAID"], this.price[i]['KAWRT'])

        this.bill = {
          "CLASS1": this.price[i]["KINAK"] == 'X' ? 1 : 0,
          // "INACTIVE": this.price[i]["KINAK"],
          "CN_TY": this.price[i]["KSCHL"],
          "NAME": "",
          "AMOUNT": this.price[i]['KBETR'],
          "Currency": this.price[i]["WAERS"],
          "PR": this.price[i]["KPEIN"],
          "UOM": this.price[i]["KMEIN"],
          "B_CN_VAL": this.price[i]["KAWRT"],
          "CN_VAL": b.toFixed(2),
          "classes":String(this.price[i]['KBETR']).substring(0,1) == "-" ? "bg-r": "bg-g"
        }
        console.log(this.bill)
        for (let j in this.names) {
          if (this.names[j]["KSCHL"] == this.bill["CN_TY"]) {
            this.bill["NAME"] = this.names[j]["VTEXT"]
          }
        }
        this.bill_list.push(this.bill);
      }

    })
    this.flag = 0

  }
  Calc(price, amount) {
    console.log(amount)
    var am = 0
    if (price["KOAID"] == "B" || price["KOAID"] == "C") {
      am = (amount * parseInt(price['KAWRT'])) / price['KPEIN']
    }
    if (price["KOAID"] == 'A') {
      am = (amount * parseInt(price['KAWRT']));
    }
    if (price["KOAID"] == 'D') {
      (price['KUMZA'] * price['KAWRT']) / price['KUMNE']
    }
    return am
  }

  onNum(dat){
    if(isNaN(dat*1)){
      return dat;
    }
    return dat*1
  }
  onCurr(dat){
    if(dat==""){
      return "%"
    }
    return dat
  }

  onUOM(dat){
    if(dat==""){
      return "-"
    }
    return dat
  }


}
