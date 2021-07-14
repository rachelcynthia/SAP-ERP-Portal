import { Component, OnInit } from '@angular/core';
import { faStickyNote, faMoneyCheckAlt} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  faStickyNote = faStickyNote;
  faCubes = faMoneyCheckAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
