import { Component, OnInit } from '@angular/core';
import { AgingService } from 'src/app/service/customer/aging.service';

@Component({
  selector: 'app-aging-display',
  templateUrl: './aging-display.component.html',
  styleUrls: ['./aging-display.component.css']
})
export class AgingDisplayComponent implements OnInit {

  constructor(private agingService:AgingService) { }
  header;
  items;
  ngOnInit(): void {
    this.agingService.getDetails({"DOC_NUM":this.agingService.getDocNum()}).subscribe((data)=>{
      this.items = data["IT_BSEG"]["item"];
      console.log(this.items);
    })
    this.header = this.agingService.getHeader();
    console.log(this.header)
  }
  onNum(dat){
    
    if(isNaN(dat*1)){
      return dat
    }
    return dat*1
  }

}
