import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InquiryService } from 'src/app/service/customer/inquiry.service';


@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  constructor(private router: Router, private inquiryService: InquiryService) { }
 
  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.inquiryService.setDocNum(form.value.doc_num)
    this.router.navigateByUrl("/cust/inquiry/display");

  }
}
