import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private userSub: Subscription;
  public isAuthenticated = false;
  constructor(private AuthService: AuthService) {}

  public ngOnInit(): void {
    this.userSub = this.AuthService.user.subscribe((user) => {
      // console.log(user);
      this.isAuthenticated = !!user;
    });
  }

  public authButton() {
    this.AuthService.Logout();
  }

  private ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
