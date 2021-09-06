import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { userReducer } from './user/userReducer';
import { jogsReducer } from './jogs/jogsReducer';
import { loadingReducer } from './loading/loadingReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    loading: loadingReducer,
    user: userReducer,
    jogs: jogsReducer,
  });

export default rootReducer;
