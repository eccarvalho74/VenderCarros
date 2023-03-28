import { Injectable } from '@angular/core';
import { ResponseLoginModel } from '../models/responseLoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public loginResponse?: ResponseLoginModel;

  public clear(): void {
     this.loginResponse = undefined;
  }

  public isAuthenticated(): boolean{
    return Boolean(this.loginResponse?.jwt);
  }
}

