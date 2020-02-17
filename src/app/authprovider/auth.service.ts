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
    login() {
        let body = {
            email: 'jm1@example.com',
            password: 'jay@123'
        }
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json')
        this.http.post('http://35.160.197.175:3006/api/v1/user/login',
        {body:body},
        {headers : headers}
        ).subscribe((response)=>{
            console.log(response)
            this.isLoggedIn = true
        },(error) => {
            console.log(error);
          });
      
    }
    logout() {
        this.isLoggedIn = false
    }
}