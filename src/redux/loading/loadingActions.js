import { loadingActionTypes } from './loadingActionTypes';

export const loadingActions = {
  startLoading: () => ({
    type: loadingActionTypes.START_LOADING,
  }),

  stopLoading: () => ({
    type: loadingActionTypes.STOP_LOADING,
  }),
};
