import { IUser } from '../interfaces';
import { createAction, props } from '@ngrx/store';

export const logIn = createAction('[Root] Login', props<{ user: IUser }>());

export const logOut = createAction('[Root] Logout');
