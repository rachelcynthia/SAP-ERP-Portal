import { Component, OnInit } from '@angular/core';
import { VendorFinanceService } from 'src/app/service/vendor/vendor-finance.service';

@Component({
  selector: 'app-vendor-aging-display',
  templateUrl: './vendor-aging-display.component.html',
  styleUrls: ['./vendor-aging-display.component.css']
})
export class VendorAgingDisplayComponent implements OnInit {

  constructor(private financeService:VendorFinanceService) { }
  items;
  header;
  ngOnInit(): void {
    this.financeService.getAgingDet({"DOC_NUM":this.financeService.getAging()}).subscribe((data)=>{
      if(Array.isArray(data["IT_BSEG"]["item"])){
        this.items = data["IT_BSEG"]["item"];
      }
      else{
        this.items = [data["IT_BSEG"]["item"]];
      }
      this.header = this.financeService.getAgingHead()
      console.log(this.header)
    })
    
    
  }
  onNum(dat){
    
    if(isNaN(dat*1)){
      return dat
    }
    return dat*1
  }

}
