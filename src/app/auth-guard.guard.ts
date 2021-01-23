import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthServiceService,
    private router: Router) { }


  canActivate(): boolean{
    if (this.authService.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      this.router.navigate(['/sign-in'])
      return false
    }
  }
  
}
