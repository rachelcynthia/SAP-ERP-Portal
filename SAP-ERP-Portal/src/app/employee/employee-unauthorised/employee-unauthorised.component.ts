import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-unauthorised',
  templateUrl: './employee-unauthorised.component.html',
  styleUrls: ['./employee-unauthorised.component.css']
})
export class EmployeeUnauthorisedComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/emp/login']);
  }, 2000);
  }

}
