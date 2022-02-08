import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from './state';
import * as RootActions from './state/root.actions';

@Injectable()
export class UserService {
  public user$ = this.store.select(selectUser);

  private isUserLoggedIn = new BehaviorSubject(false);
  public isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  constructor(private router: Router, private store: Store) {}

  public checkCredentials(username: string, password: string): boolean {
    if (username === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true);
      localStorage.setItem('loggedIn', 'true');

      this.store.dispatch(
        RootActions.logIn({ user: { email: username, password } })
      );

      return true;
    }

    return false;
  }

  public logUser(isLoggedIn: boolean): void {
    this.isUserLoggedIn.next(isLoggedIn);
  }

  public logout() {
    localStorage.setItem('loggedIn', 'false');
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
    this.store.dispatch(RootActions.logOut());
  }
  public checkIsLoggedIn(): Observable<boolean> {
    const isLoggedIn = localStorage.getItem('loggedIn') || 'false';

    return combineLatest([of(isLoggedIn), this.isUserLoggedIn$]).pipe(
      map((results: [string | null, boolean]) => {
        const isLoggedIn = results[0] === 'true' || results[1];

        if (results[0] === 'true' && !results[1]) {
          this.logUser(true);
        }

        return isLoggedIn;
      })
    );
  }
}
