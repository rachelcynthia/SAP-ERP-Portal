import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InquiryService } from '../service/customer/inquiry.service';

@Injectable({
  providedIn: 'root'
})
export class CusomerInquiryGuard implements CanActivate {
  constructor(private inquiryService:InquiryService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.inquiryService.getDocNum()==undefined){
        this.router.navigateByUrl('/cust/inquiry/display-form')
        return false;
      }

    return true;
  }
  
}
