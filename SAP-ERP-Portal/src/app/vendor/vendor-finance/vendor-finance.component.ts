import { Component, OnInit } from '@angular/core';
import { faStickyNote, faCubes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-vendor-finance',
  templateUrl: './vendor-finance.component.html',
  styleUrls: ['./vendor-finance.component.css']
})
export class VendorFinanceComponent implements OnInit {
  faStickyNote = faStickyNote;
  faCubes = faCubes;
  constructor() { }

  ngOnInit(): void {
  }

}
