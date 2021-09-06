import { handleActions } from 'redux-actions';
import { userActionTypes } from './userActionTypes';

const initialState = {
  isAuth: false,
};

export const userReducer = handleActions(
  {
    [userActionTypes.AUTH_USER]: (state, action) => {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    },
    [userActionTypes.LOGOUT_USER]: (state, action) => {
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    },
  },
  initialState
);
