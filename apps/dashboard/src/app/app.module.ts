import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInGuard } from './logged-in.guard';
import { SharedDataAccessUserModule } from '@ng-mfe/shared/data-access-user';
import { StoreModule } from '@ngrx/store';
import { RemoteEntryModule } from '@ng-mfe/login';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavbarComponent,
    UserDropdownComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    SharedDataAccessUserModule,
    RemoteEntryModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () =>
            import('login/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'home',
          loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
          canActivate: [LoggedInGuard],
        },
        {
          path: 'products',
          loadChildren: () =>
            import('products/Module').then((m) => m.RemoteEntryModule),
          canActivate: [LoggedInGuard],
        },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
