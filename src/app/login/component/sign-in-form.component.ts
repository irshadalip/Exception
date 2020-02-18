import { Component, OnInit } from '@angular/core';
import { LogService } from '../../logservice/log.service';
import { AuthService } from '../../authprovider/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in-form',
    templateUrl: '../../login/view/sign-in-form.component.html',
    styleUrls: ['../../login/view/sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

    email: String = "";
    password: String = "";
    response: void;

    constructor(private authService: AuthService, private logService: LogService, private router: Router) { }

    ngOnInit() {
    }
    onClickSignIn() {
        console.log("email and password ",this.email," ",this.password);
    
        this.response =  this.authService.login(this.email ,this.password);
        console.log("response ",this.response);
        // 
        this.logService.log("Sign in Successfull")
    }
}
