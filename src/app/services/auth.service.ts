import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserModel } from '../interfaces/user.model';

export interface AuthResponseData {
  token: string;
  error: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  NewUser: UserModel = {
    email: null,
    token: null,
  };
  user = new BehaviorSubject<UserModel>(null);

  constructor(private http: HttpClient, private router: Router) {}

  Login(email: string, password: string) {
    return this.http
      .post<UserModel>('https://reqres.in/api/login', {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.NewUser.email = email;
          this.NewUser.token = resData.token;
          resData.email = email;
          this.user.next(this.NewUser);
          localStorage.setItem('userData', JSON.stringify(this.NewUser));
        })
      );
  }

  Logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Incorrect Email or Password';
    return throwError(errorMessage);
  }

  autoLogin() {
    const userData: {
      email: string;
      token: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    if (userData.token) {
      this.user.next(userData);
      this.router.navigate(['/product']);
    }
  }
}
