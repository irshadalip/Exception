import { LogService } from '../logservice/log.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private logService : LogService , private http : HttpClient){

    }

    private isLoggedIn = false;
    isAuthenticated() {
        return this.isLoggedIn;
    }
    login(email ,password) {
        let body = {
            email: email,
            password: 'jay@123'
        }
        this.http.post('http://35.160.197.175:3006/api/v1/user/login',
        body,
        ).subscribe((response)=>{
            console.log(response['token'])
            window.localStorage.setItem('storeToken',response['token']);
            console.log(window.localStorage.getItem('storeToken'))
            this.isLoggedIn = true
        },(error) => {
            console.log(error);
          });
      
    }
    logout() {
        this.isLoggedIn = false
    }
}