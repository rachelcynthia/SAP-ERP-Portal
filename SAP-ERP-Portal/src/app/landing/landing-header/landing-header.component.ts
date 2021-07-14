import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faEnvelopeOpenText,faUser,faCode } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent implements OnInit {

  faEnvelope = faEnvelopeOpenText;
  faUser = faUser;
  faCode =faCode;

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
