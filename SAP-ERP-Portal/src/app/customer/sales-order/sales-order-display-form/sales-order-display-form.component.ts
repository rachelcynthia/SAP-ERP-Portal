import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesorderService } from 'src/app/service/customer/salesorder.service';

@Component({
  selector: 'app-sales-order-display-form',
  templateUrl: './sales-order-display-form.component.html',
  styleUrls: ['./sales-order-display-form.component.css']
})
export class SalesOrderDisplayFormComponent implements OnInit {

  constructor(private router:Router,private saleorderService:SalesorderService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.saleorderService.setSalesDoc(form.value.doc_num);
    this.router.navigateByUrl("/cust/saleorder/display");
  }

}
