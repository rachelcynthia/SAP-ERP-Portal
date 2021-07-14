import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-middle',
  templateUrl: './display-middle.component.html',
  styleUrls: ['./display-middle.component.css']
})
export class DisplayMiddleComponent implements OnInit {
  tab_items=[0,1,2,3,4];
  selected_item = "sales";
  items:object;
  header:object;
  constructor() { }

  ngOnInit(): void {
  }

  itemSelected(item_id){
    this.selected_item = item_id;
  }

}
