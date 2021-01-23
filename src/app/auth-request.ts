import { HttpClient ,HttpHeaders, HttpInterceptor  } from '@angular/Common/http';

import { TOKEN_NAME } from 'src/app/auth-service.service';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

export class AuthRequestOptions implements HttpInterceptor {
  
    constructor(private http:HttpClient, private headers:HttpHeaders ) {
      super();
      
      const token = localStorage.getItem(TOKEN_NAME);
      if(token) {
        this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
      }
    }
  
  }