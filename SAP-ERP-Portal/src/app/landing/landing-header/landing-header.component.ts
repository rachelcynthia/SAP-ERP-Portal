import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent implements OnInit {

  @Output() content = new EventEmitter<string>();
  constructor() { }
  selected_tab = "portal"
  ngOnInit(): void {
  }
  onClick(current){
    console.log(current);
    this.content.emit(current);
    this.selected_tab=current;
  }

}
