import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@ng-mfe/shared/data-access-user';
import { take } from 'rxjs';

@Component({
  selector: 'ng-mfe-login-entry',
  template: `
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-md mx-auto"
    >
      <form (ngSubmit)="login()">
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="username"
            [(ngModel)]="username"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            name="password"
            [(ngModel)]="password"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div *ngIf="isLoggedIn$ | async">User is logged in!</div>
    </div>
  `,
})
export class RemoteEntryComponent implements OnInit {
  public username = '';
  public password = '';
  public color = 'beige';

  public isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService, private router: Router) {}

  public ngOnInit(): void {
    this.userService
      .checkIsLoggedIn()
      .pipe(take(1))
      .subscribe({
        next: (isLoggedIn) => {
          if (isLoggedIn) {
            this.router.navigate(['/home']);
          }
        },
      });
    this.userService.user$.subscribe((user) => console.log('login', user));
  }

  public login() {
    const isLoggedIn: boolean = this.userService.checkCredentials(
      this.username,
      this.password
    );
    if (isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }
}
