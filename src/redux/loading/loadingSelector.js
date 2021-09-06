import { createSelector } from 'reselect';

const loadingSelector = state => state.loading;

export const isLoading = createSelector(loadingSelector, item => item.loading);
