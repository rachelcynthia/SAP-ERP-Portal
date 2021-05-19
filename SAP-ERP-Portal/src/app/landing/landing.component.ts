import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor() { }

  current_tab = "portal"; 

  setCurrentTab(event:string){
    this.current_tab = event;
  }

  ngOnInit(): void {
  }

}
