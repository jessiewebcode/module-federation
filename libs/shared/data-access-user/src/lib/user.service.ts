import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserLoggedIn = new BehaviorSubject(false);
  public isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  constructor(private router: Router) {}

  public checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true);
      localStorage.setItem('loggedIn', 'true');
    }
  }

  public logUser(isLoggedIn: boolean): void {
    this.isUserLoggedIn.next(isLoggedIn);
  }

  public logout() {
    localStorage.setItem('loggedIn', 'false');
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
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
