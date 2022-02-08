import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RemoteEntryComponent } from './entry.component';
import { SharedDataAccessUserModule } from '@ng-mfe/shared/data-access-user';

@NgModule({
  declarations: [RemoteEntryComponent],
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
  providers: [],
})
export class RemoteEntryModule {}
