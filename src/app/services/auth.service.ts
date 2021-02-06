import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
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
  user: UserModel = {
    email: null,
    token: null,
  };
  constructor(private http: HttpClient) {}

  Login(email: string, password: string) {
    return this.http
      .post<UserModel>('https://reqres.in/api/login', {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.user.email = email;
          this.user.token = resData.token;
          resData.email = email;
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    return throwError(errorMessage);
  }
}
