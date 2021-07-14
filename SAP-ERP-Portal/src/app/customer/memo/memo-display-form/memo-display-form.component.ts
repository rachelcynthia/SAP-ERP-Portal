import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MemoService } from 'src/app/service/customer/memo.service';

@Component({
  selector: 'app-memo-display-form',
  templateUrl: './memo-display-form.component.html',
  styleUrls: ['./memo-display-form.component.css']
})
export class MemoDisplayFormComponent implements OnInit {

  constructor(private memoService:MemoService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.memoService.setDocNum(form.value.doc_num)
    this.router.navigateByUrl("/cust/memo/display");
  }

}
