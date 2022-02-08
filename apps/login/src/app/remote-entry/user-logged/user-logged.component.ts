import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from '@ng-mfe/shared/data-access-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-mfe-user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.css'],
})
export class UserLoggedComponent {
  public user$: Observable<IUser> = this.userService.user$;

  constructor(private userService: UserService) {}
}
