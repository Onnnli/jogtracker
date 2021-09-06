import { createSelector } from 'reselect';

const userSelector = state => state.user;

export const isAuthSelect = createSelector(userSelector, user => user.isAuth);
