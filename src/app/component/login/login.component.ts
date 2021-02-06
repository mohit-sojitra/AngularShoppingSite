import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error = null;
  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(loginForm) {
    this.isLoading = true;
    this.AuthService.Login(
      loginForm.value.email,
      loginForm.value.password
    ).subscribe(
      (resData) => {
        this.error = null;
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/product']);
      },
      (error) => {
        this.error = error;
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}