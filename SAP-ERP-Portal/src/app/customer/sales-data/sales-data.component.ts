import { Component, OnInit } from '@angular/core';
import { MlService } from 'src/app/service/customer/ml.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sales-data',
  templateUrl: './sales-data.component.html',
  styleUrls: ['./sales-data.component.css']
})
export class SalesDataComponent implements OnInit {
  
  flag1=1;
  options:number[] = [  74,  337,  423,  432,  581,  611,  631,  659,  743,  797,  868,
    904,  926,  972,  973, 1054, 1135, 1173, 1190, 1196, 1228, 1240,
   1242, 1275, 1322, 1328, 1365, 1424, 1472, 1508, 1542, 1548, 1599,
   1629, 1672, 1694, 1727, 1753, 2294, 2332, 2492, 2768, 2794, 2818,
   2853, 2932, 2935, 3004, 3008, 3021]
   options1: number[] = [111, 112, 113, 114, 221, 222, 223, 331, 332, 333] 
  options2: string[] = ["0-Kerala", "1-Maharashtra", "2-Telengana"];


  constructor(private mlService: MlService,private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
  }

  onSubmit1(form:NgForm){
    console.log(form.value)
    this.mlService.getLinear(parseInt(form.value.pid)).subscribe((data)=>{
      console.log(data)
      document.getElementById('sol1').innerHTML = data["Pred"]
    })
  }
  onSubmit2(form:NgForm){
    console.log(form.value)
    this.mlService.getLasso([parseInt(form.value.product),parseInt(form.value.outlet)]).subscribe((data)=>{
      document.getElementById('sol2').innerHTML = data["Pred"]
    })
  }
  onSubmit3(form:NgForm){
    console.log(form.value)
    this.mlService.getDT([parseInt(form.value.pid1),parseInt(form.value.state.split("-")[0])]).subscribe((data)=>{
      document.getElementById('sol3').innerHTML = data["Pred"]
    })
  }

}
