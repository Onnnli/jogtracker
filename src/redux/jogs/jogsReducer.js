import { handleActions } from 'redux-actions';
import { jogsActionTypes } from './jogsActionTypes';

const initialState = {
  jogs: [],
  activeFilter: false,
};

export const jogsReducer = handleActions(
  {
    [jogsActionTypes.GET_JOGS]: (state, action) => {
      return {
        ...state,
        jogs: action.payload,
      };
    },
    [jogsActionTypes.ADD_JOG]: (state, action) => {
      return {
        ...state,
        jogs: [...state.jogs, action.payload],
      };
    },
    [jogsActionTypes.FILTER_JOGS]: (state, action) => {
      return {
        ...state,
        activeFilter: action.payload,
      };
    },
    [jogsActionTypes.UPDATE_JOG]: (state, action) => {
      return {
        ...state,
        jogs: state.jogs.map(jog =>
          jog.id === action.payload.id ? { ...jog, ...action.payload } : jog
        ),
      };
    },
    [jogsActionTypes.DELETE_JOG]: (state, action) => {
      return {
        ...state,
        jogs: state.jogs.filter(jog => jog.id !== action.payload),
      };
    },
  },
  initialState
);
