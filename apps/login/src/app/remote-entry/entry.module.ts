import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RemoteEntryComponent } from './entry.component';
import { SharedDataAccessUserModule } from '@ng-mfe/shared/data-access-user';
import { UserLoggedComponent } from './user-logged/user-logged.component';

@NgModule({
  declarations: [RemoteEntryComponent, UserLoggedComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedDataAccessUserModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  exports: [UserLoggedComponent],
  providers: [],
})
export class RemoteEntryModule {}
