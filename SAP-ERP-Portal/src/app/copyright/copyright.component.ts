import { Component, OnInit } from '@angular/core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  faCopyright = faCopyright;

  constructor() { }

  ngOnInit(): void {
  }

}
