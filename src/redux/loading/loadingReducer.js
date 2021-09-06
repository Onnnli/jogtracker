import { handleActions } from 'redux-actions';

import { loadingActionTypes } from './loadingActionTypes';

const initialState = {
  loading: 0,
};

export const loadingReducer = handleActions(
  {
    [loadingActionTypes.START_LOADING]: (state, action) => {
      return {
        ...state,
        loading: state.loading + 1,
      };
    },
    [loadingActionTypes.STOP_LOADING]: (state, action) => {
      return {
        ...state,
        loading: state.loading - 1,
      };
    },
  },
  initialState
);
