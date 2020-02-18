import { LogService } from '../logservice/log.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private logService : LogService , private http : HttpClient,private router: Router){

    }

    private isLoggedIn = false;
    private isAuthToken = false;
   
    isAuthorized(){
        return this.isAuthToken
    }
    login(email ,password) {
        let body = {
            email: email,
            password: password
        }
        this.http.post('http://35.160.197.175:3006/api/v1/user/login',
        body,
        ).subscribe((response)=>{
            console.log(response['token'])
            window.localStorage.setItem('storeToken',response['token']);
            console.log(window.localStorage.getItem('storeToken'));
            this.isAuthToken = true;
            this.router.navigate(['/add-recipe']);
            return response;
        },(error) => {
            console.log(error);
          });
      
    }
    logout() {
        this.isAuthToken  = false
    }
}