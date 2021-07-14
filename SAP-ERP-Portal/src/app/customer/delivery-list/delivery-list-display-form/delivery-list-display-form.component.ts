import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeliverylistService } from 'src/app/service/customer/deliverylist.service';

@Component({
  selector: 'app-delivery-list-display-form',
  templateUrl: './delivery-list-display-form.component.html',
  styleUrls: ['./delivery-list-display-form.component.css']
})
export class DeliveryListDisplayFormComponent implements OnInit {

  constructor(private router: Router, private delivery:DeliverylistService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.delivery.setDelivery(form.value.doc_num)
    this.router.navigateByUrl('cust/deliverylist/display')
  }

}
