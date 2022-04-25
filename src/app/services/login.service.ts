import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { IUser } from '../Interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user:IUser = {
    userId: 0,
    firstName: '',
    lastName: '',
    email:'',
    password:'',
    userType:'',
    phoneNumber:''
  }
  public isAuthenticated = false;

  constructor(private http: HttpClient, private cookieService:CookieService) { }


  loginUser(email: string, password: string):Observable<IUser>  {
    let loginInfo = [email, password];
    const response = this.http.post<IUser>('http://localhost:8080/users/login', loginInfo);
    response.subscribe(userData => {
      //set cookies
      this.cookieService.set('userId', userData.userId.toString());
      this.cookieService.set('email', userData.email);
      this.cookieService.set('firstName', userData.firstName);
      this.cookieService.set('lastName', userData.lastName);
      this.cookieService.set('userType', userData.userType);
      this.cookieService.set('isAuthenticated', 'true');
      
    })
    this.isAuthenticated = true;
    return response;
  }

  
}
