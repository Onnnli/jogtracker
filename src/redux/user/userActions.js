import { push } from 'connected-react-router';

import { userService } from '../../services/userServices';
import { userActionTypes } from './userActionTypes';
import { appRouters } from '../../constants/appRouters';
import { loadingActions } from '../loading/loadingActions';

export const userActions = {
  authUser: () => async dispatch => {
    try {
      dispatch(loadingActions.startLoading());
      const { data } = await userService.authUser();

      if (data) {
        dispatch(userActions.authUserSuccess(data.response));
        await dispatch(push(`${appRouters.JOGS}`));
      }
    } catch (e) {
      console.warn(e);
    } finally {
      dispatch(loadingActions.stopLoading());
    }
  },

  authUserSuccess: user => ({
    payload: user,
    type: userActionTypes.AUTH_USER,
  }),

  loginUser: () => async dispatch => {
    try {
      dispatch(loadingActions.startLoading());
      const { data } = await userService.loginUser('hello');
      if (data) {
        await localStorage.setItem('jwt', data.response.access_token);
        await dispatch(userActions.authUser());
      }
    } catch (e) {
      console.warn(e);
    } finally {
      dispatch(loadingActions.stopLoading());
    }
  },

  logoutUser: () => async dispatch => {
    try {
      dispatch(loadingActions.startLoading());
      const push_token = localStorage.getItem('jwt');
      await userService.logoutUser({ push_token });

      localStorage.removeItem('jwt');
      dispatch(userActions.logoutUserSuccess());
      await dispatch(push(`${appRouters.HOME}`));
    } catch (e) {
      console.warn(e);
    } finally {
      dispatch(loadingActions.stopLoading());
    }
  },

  logoutUserSuccess: () => ({
    type: userActionTypes.LOGOUT_USER,
  }),
};
