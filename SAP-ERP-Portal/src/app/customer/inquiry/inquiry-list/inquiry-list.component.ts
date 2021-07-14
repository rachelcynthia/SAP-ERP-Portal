import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { InquiryService } from 'src/app/service/customer/inquiry.service';


@Component({
  selector: 'app-inquiry-list',
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.css']
})
export class InquiryListComponent implements OnInit {
  table_data:object;
  flag=1

  constructor(private inquiryService : InquiryService, private cookiService:CookieService,private router:Router) { 
  
  }

  ngOnInit(): void {
    this.inquiryService.getList(this.cookiService.get('username')).subscribe((data)=>{
      this.table_data = data;
      this.table_data['IT_SALESDOC']['item'] = this.DescSortData()
      console.log(this.table_data['IT_SALESDOC']['item']);
    })
  }

  onClick(docNum){
    this.inquiryService.setDocNum(docNum);
    this.router.navigateByUrl('/cust/inquiry/display')
  }
  onSort(){
    if(this.flag==0){this.table_data['IT_SALESDOC']['item'] = this.DescSortData()}
    else{this.table_data['IT_SALESDOC']['item'] = this.AscSortData()}
    console.log( this.table_data['IT_SALESDOC']['item'])
    this.flag = this.flag == 1?0:1;
  }

  DescSortData() {
    return this.table_data['IT_SALESDOC']['item'].sort((a, b) => {
      return <any>new Date(b['CREATED_ON']) - <any>new Date(a['CREATED_ON']);
    });
  }

  AscSortData(){
    return this.table_data['IT_SALESDOC']['item'].sort((a, b) => {
      return <any>new Date(a['CREATED_ON']) - <any>new Date(b['CREATED_ON']);
    });
  }


}
