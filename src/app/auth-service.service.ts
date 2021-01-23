import { baseUrl } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from './token';

export const TOKEN_NAME: string = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(private http:HttpClient) { }

  
  signIn(username:string, password:string):Observable<any>{
    return this.http.post<any>(`${baseUrl}account/login`, { username,password});
  }

}
