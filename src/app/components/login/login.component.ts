import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDate = {}

  email:string = '';
  password:string = '';
  error: boolean = false;


  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit(): void {
  }

  login():void {

    this.loginService.loginUser(this.email, this.password)
    .subscribe(data => {
      if(data){
        this.loginService.user = {
          userId: data.userId,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
          phoneNumber: data.phoneNumber,
          userType: data.userType

        }
        this.error = false;
        this.router.navigateByUrl('/home');
      }

    }, (error)=> this.error = true);
  }

}
