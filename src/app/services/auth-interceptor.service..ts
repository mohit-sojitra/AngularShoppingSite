import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private AuthService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userData: {
      email: string;
      token: string;
    } = JSON.parse(localStorage.getItem('userData'));
    console.log('intercept');
    if (userData) {
      const modifiedReq = req.clone({
        params: new HttpParams().set('Token', userData.token),
      });
      return next.handle(modifiedReq);
    }
    return next.handle(req);
  }
}
