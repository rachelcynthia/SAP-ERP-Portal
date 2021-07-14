import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesGuard implements CanActivate {
  constructor(private cookieService:CookieService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.cookieService.get('e_isLoggedIn'))
      if(this.cookieService.get('e_isLoggedIn')!="true"){
        this.router.navigateByUrl('/emp/unauthorised');
        return false;
      }
    return true;
  }
  
}
