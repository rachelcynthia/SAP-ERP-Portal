import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardGuard implements CanActivate {

  constructor(private cookieService:CookieService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.cookieService.get('isLoggedIn'))
      if(this.cookieService.get('isLoggedIn')!="true"){
        this.router.navigateByUrl('/cust/unauthorised');
        return false;
      }
    return true;
  }
  
}
