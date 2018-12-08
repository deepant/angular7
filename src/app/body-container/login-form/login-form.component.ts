import { Component, OnInit } from '@angular/core';
import { LoginForm } from './login-form';
import { Router } from '@angular/router';

@Component({
  selector: 'cc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new LoginForm();
  logger:string;

  userList = [
    {
      userName :"user - 1",
    },
    {
      userName :"user - 2",
    },
    {
      userName :"user - 3",
    },
    {
      userName :"user - 4",
    },
    {
      userName :"user - 5",
    },
    {
      userName :"user - 6",
    }
  ]

  constructor(private router: Router) {
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
    }else if(this.loginForm.userName === 'user - 1'){
      this.router.navigate(['home']);
    }
  }

}
