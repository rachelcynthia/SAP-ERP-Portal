import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorSalesService } from 'src/app/service/vendor/vendor-sales.service';

@Component({
  selector: 'app-vendor-po-display-form',
  templateUrl: './vendor-po-display-form.component.html',
  styleUrls: ['./vendor-po-display-form.component.css']
})
export class VendorPoDisplayFormComponent implements OnInit {

  constructor(private salesService:VendorSalesService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.salesService.setPO(form.value.doc_num);
    this.router.navigateByUrl("/vend/sales/po/display");
  }

}
