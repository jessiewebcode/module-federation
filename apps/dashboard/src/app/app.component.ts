import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@ng-mfe/shared/data-access-user';
import { take } from 'rxjs';

@Component({
  selector: 'ng-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  public isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService
      .checkIsLoggedIn()
      .pipe(take(1))
      .subscribe((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      });

    this.userService.user$.subscribe((user) => console.log('dashboard', user));
  }
}
