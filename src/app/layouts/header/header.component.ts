import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.AuthService.user.subscribe((user) => {
      // console.log(user);
      this.isAuthenticated = !!user;
    });
  }

  authButton() {
    this.AuthService.Logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
