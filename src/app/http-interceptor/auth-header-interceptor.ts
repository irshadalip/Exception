import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = 'Bearer ' + window.localStorage.getItem('storeToken')
        const authReq = request.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        });

        return next.handle(authReq)
    }
}