import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestLoginModel } from './../models/requestLoginModel';
import { Observable, tap } from 'rxjs';
import { ResponseLoginModel } from './../models/responseLoginModel';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient: HttpClient,
    private authservice: AuthService ) { }

  public  doLogin(requestLogin : RequestLoginModel): Observable<ResponseLoginModel>{
    return this.httpClient.post<ResponseLoginModel>(
      'http://localhost:8080/api/login',
       requestLogin)
       .pipe(tap((loginresp)=> this.authservice.loginResponse = loginresp));

  }
}
