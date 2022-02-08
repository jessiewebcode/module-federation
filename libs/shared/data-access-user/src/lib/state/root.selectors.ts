import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRootState, rootStateFeatureKey } from './root.reducer';

export const rootSelector =
  createFeatureSelector<IRootState>(rootStateFeatureKey);

export const selectUser = createSelector(
  rootSelector,
  (rootState: IRootState) => rootState.user
);
