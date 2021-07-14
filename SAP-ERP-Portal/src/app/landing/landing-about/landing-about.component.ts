import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-about',
  templateUrl: './landing-about.component.html',
  styleUrls: ['./landing-about.component.css']
})
export class LandingAboutComponent implements OnInit {
  selected_tab = 'comp'
  tabItemList = [
    {'id': 'comp', 'text': 'About Company'},
    {'id': 'code', 'text': 'Code'},
    {'id': 'contact', 'text': 'Contact Us'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClickTab(item:string){
    this.selected_tab = item;
    console.log(item,this.selected_tab);
  }

}
