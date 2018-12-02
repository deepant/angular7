import { Component, OnInit } from '@angular/core';
import { LoginForm } from './login-form';

@Component({
  selector: 'cc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new LoginForm();
  logger:string;

  constructor() {
   }

  ngOnInit() {
    console.log(this.loginForm);
    this.logger = 'string';
    this.loggerMethod(this.logger);
  }

  loggerMethod(logger:string){
    console.log(logger);
  }

  login(){
    console.log(this.loginForm);
    if(this.loginForm.userName === ''){
      alert('user name is required');
    }
  }

}
