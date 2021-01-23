import { HttpClient } from '@angular/Common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }


  getData(){
    return this.http.get<any>(`${baseUrl}dashboard`)
  };

}
