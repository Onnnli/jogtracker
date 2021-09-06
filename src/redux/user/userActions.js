import { userService } from '../../services/userServices';
import { userActionTypes } from './userActionTypes';

import { push } from 'connected-react-router';
import { appRouters } from '../../constants/appRouters';

export const userActions = {
  authUser: () => async dispatch => {
    try {
      const { data } = await userService.authUser();

      if (data) {
        dispatch(userActions.authUserSuccess(data.response));
        await dispatch(push(`${appRouters.JOGS}`));
      }
    } catch (e) {
      console.warn(e);
    }
  },

  authUserSuccess: user => ({
    payload: user,
    type: userActionTypes.AUTH_USER,
  }),

  loginUser: () => async dispatch => {
    try {
      const { data } = await userService.loginUser('hello');
      if (data) {
        await localStorage.setItem('jwt', data.response.access_token);
        await dispatch(userActions.authUser());
      }
    } catch (e) {
      console.warn(e);
    }
  },

  logoutUser: () => async dispatch => {
    try {
      const push_token = localStorage.getItem('jwt');
      await userService.logoutUser({ push_token });

      localStorage.removeItem('jwt');
      dispatch(userActions.logoutUserSuccess());
      await dispatch(push(`${appRouters.HOME}`));
    } catch (e) {
      console.warn(e);
    }
  },

  logoutUserSuccess: () => ({
    type: userActionTypes.LOGOUT_USER,
  }),
};
