import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  adminSignIn(userInfo: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/admin/adminSignIn", userInfo,
      { responseType: 'text' });
  }

  userSignUp(userInfo: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/user/signUp", userInfo,
      { responseType: 'text' });
  }
}
