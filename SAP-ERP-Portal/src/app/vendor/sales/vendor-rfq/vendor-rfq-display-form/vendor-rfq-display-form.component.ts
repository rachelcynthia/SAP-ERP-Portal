import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-rfq-display-form',
  templateUrl: './vendor-rfq-display-form.component.html',
  styleUrls: ['./vendor-rfq-display-form.component.css']
})
export class VendorRfqDisplayFormComponent implements OnInit {

  constructor(private salesService:VendorSalesService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.salesService.setRFQ(form.value.doc_num);
    this.router.navigateByUrl("/vend/sales/rfq/display");
  }

}
