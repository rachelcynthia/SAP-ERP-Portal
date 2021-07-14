import { Component, OnInit } from '@angular/core';
import { VendorFinanceService } from 'src/app/service/vendor/vendor-finance.service';

@Component({
  selector: 'app-vendor-memo-display',
  templateUrl: './vendor-memo-display.component.html',
  styleUrls: ['./vendor-memo-display.component.css']
})
export class VendorMemoDisplayComponent implements OnInit {

  constructor(private financeService:VendorFinanceService) { }
  items;
  header;
  ngOnInit(): void {
    this.header = this.financeService.getMemoHead();
    this.financeService.getMemoDet({"DOC_NUM":this.financeService.getMemo()}).subscribe((data)=>{
      if(Array.isArray(data["IT_BSEG"]["item"])){
        this.items = data["IT_BSEG"]["item"]
      }
      else{
        this.items = [data["IT_BSEG"]["item"]]
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
