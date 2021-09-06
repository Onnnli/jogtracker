import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { userReducer } from './user/userReducer';
import { jogsReducer } from './jogs/jogsReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    jogs: jogsReducer,
  });

export default rootReducer;
