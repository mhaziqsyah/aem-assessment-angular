import { AuthServiceService } from './auth-service.service';
import { HttpInterceptor } from '@angular/Common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req, next){
    let authService = this.injector.get(AuthServiceService)
    let tokenizedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken())
    }
    )
    return next.handle(tokenizedReq);
  }

  

}
