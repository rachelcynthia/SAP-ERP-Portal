import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStickyNote, faCubes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faStickyNote = faStickyNote;
  faCubes = faCubes;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(variable:string){
    if(variable === 'inq'){
      this.router.navigateByUrl('cust/inquiry');
    }

  }

}
