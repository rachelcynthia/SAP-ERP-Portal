import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SalesorderService } from '../service/customer/salesorder.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerSaleorderGuard implements CanActivate {
  constructor(private saleService:SalesorderService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.saleService.getSalesDoc()==undefined){
        this.router.navigateByUrl('/cust/saleorder/display-form')
      }
    return true;
  }
  
}
