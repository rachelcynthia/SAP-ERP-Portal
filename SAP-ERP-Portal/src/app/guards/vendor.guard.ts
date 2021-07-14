import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {

  constructor(private cookieService:CookieService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.cookieService.get('v_isLoggedIn'))
      if(this.cookieService.get('v_isLoggedIn')!="true"){
        this.router.navigateByUrl('/vend/unauthorised');
        return false;
      }

    return true;
  }
  
}
