import moment from 'moment';

import { jogServices } from '../../services/jogServices';
import { jogsActionTypes } from './jogsActionTypes';
import { loadingActions } from '../loading/loadingActions';

export const jogsActions = {
  getJogs: () => async dispatch => {
    try {
      dispatch(loadingActions.startLoading());
      const { data } = await jogServices.getJogs();
      if (data) {
        dispatch(jogsActions.getJogsSuccess(data.response.jogs));
      }
    } catch (e) {
      console.warn(e);
    } finally {
      dispatch(loadingActions.stopLoading());
    }
  },

  getJogsSuccess: jogs => ({
    payload: jogs,
    type: jogsActionTypes.GET_JOGS,
  }),

  addJog: jog => async dispatch => {
    try {
      dispatch(loadingActions.startLoading());
      const { data } = await jogServices.addJog({
        time: parseInt(jog.time),
        date: moment(new Date(jog.date)).format('DD.MM.YYYY'),
        distance: parseFloat(jog.distance),
      });

      if (data) {
        dispatch(
          jogsActions.addJogSuccess({
            ...data.response,
            date: new Date(data.response.date).getTime() / 1000,
          })
        );
      }
    } catch (e) {
      console.warn(e);
    } finally {
      dispatch(loadingActions.stopLoading());
    }
  },

  addJogSuccess: jog => ({
    payload: jog,
    type: jogsActionTypes.ADD_JOG,
  }),

  updateJog: jog => async dispatch => {
    try {
      dispatch(loadingActions.startLoading());
      const { data } = await jogServices.updateJog({ ...jog, jog_id: jog.id });

      if (data) {
        dispatch(
          jogsActions.updateJogSuccess({
            ...data.response,
            date: new Date(data.response.date).getTime() / 1000,
          })
        );
      }
    } catch (e) {
      console.warn(e);
    } finally {
      dispatch(loadingActions.stopLoading());
    }
  },

  updateJogSuccess: jog => ({
    payload: jog,
    type: jogsActionTypes.UPDATE_JOG,
  }),

  deleteJog: (jogId, userId) => async dispatch => {
    try {
      const { data } = await jogServices.deleteJog({
        jog_id: jogId.toString(),
        user_id: userId,
      });

      if (data.response === 'OK') {
        dispatch(jogsActions.deleteJogSuccess(jogId));
      }
    } catch (e) {
      console.warn(e);
    }
  },

  deleteJogSuccess: id => ({
    payload: id,
    type: jogsActionTypes.DELETE_JOG,
  }),

  activeFilter: visible => ({
    payload: visible,
    type: jogsActionTypes.FILTER_JOGS,
  }),
};
