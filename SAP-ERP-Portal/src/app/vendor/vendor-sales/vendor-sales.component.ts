import { Component, OnInit } from '@angular/core';
import { faStickyNote, faCubes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-vendor-sales',
  templateUrl: './vendor-sales.component.html',
  styleUrls: ['./vendor-sales.component.css']
})
export class VendorSalesComponent implements OnInit {

  faStickyNote = faStickyNote;
  faCubes = faCubes;
  constructor() { }

  ngOnInit(): void {
  }

}
