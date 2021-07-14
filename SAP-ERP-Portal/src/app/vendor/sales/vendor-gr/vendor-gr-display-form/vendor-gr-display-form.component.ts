import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-gr-display-form',
  templateUrl: './vendor-gr-display-form.component.html',
  styleUrls: ['./vendor-gr-display-form.component.css']
})
export class VendorGrDisplayFormComponent implements OnInit {

  constructor(private salesService:VendorSalesService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value)
    this.salesService.setGoods(form.value.doc_num);
    this.salesService.setGoodsYear(form.value.year);
    this.router.navigateByUrl("/vend/sales/gr/display");
  }

}
