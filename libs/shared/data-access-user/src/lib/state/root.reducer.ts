import { IUser } from '../interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as RootActions from './root.actions';

export const rootStateFeatureKey = 'rootState';

export interface IRootState {
  user: IUser;
}

export const initialState: IRootState = {
  user: null,
};

export const rootReducer = createReducer(
  initialState,
  on(RootActions.logIn, (state, action) => {
    return { ...state, user: action.user };
  }),

  on(RootActions.logOut, (state) => {
    return { ...state, user: {} };
  })
);
