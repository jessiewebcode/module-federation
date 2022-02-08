import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducer, rootStateFeatureKey } from './state';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(rootStateFeatureKey, rootReducer),
  ],
  providers: [UserService],
})
export class SharedDataAccessUserModule {}
