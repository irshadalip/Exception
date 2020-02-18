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

    constructor(private authService: AuthService, private logService: LogService, private router: Router) { }

    ngOnInit() {
    }
    onClickSignIn() {
        this.authService.login(this.email ,this.password)
        this.router.navigate(['/add-recipe'])
        this.logService.log("Sign in Successfull")
    }
}
