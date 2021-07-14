import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-unauthorised',
  templateUrl: './vendor-unauthorised.component.html',
  styleUrls: ['./vendor-unauthorised.component.css']
})
export class VendorUnauthorisedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/vend/login']);
  }, 2000);
  }

}
