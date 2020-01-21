import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Login } from '../login';
import { LogService } from '../log.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

    email: String = "";
    password: String = "";

   // @Output() signIn = new EventEmitter<Login>();
    constructor(private authService : AuthService, private logService : LogService, private router: Router) { }

    ngOnInit() {
    }
    onClickSignIn(){
    this.authService.login()
    this.router.navigate(['/add-recipe'])
    this.logService.log("Sign in Successfull")
    }
}
