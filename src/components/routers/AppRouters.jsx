import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import Main from '../../containers/Main';
import Jogs from '../../containers/Jogs';
import Info from '../../containers/Info';
import Contact from '../../containers/Contact';
import { history } from '../../redux/store';
import { appRouters } from '../../constants/appRouters';
import { userActions } from '../../redux/user/userActions';
import PrivateRoute from './PrivateRoute';
import NotFound from '../../containers/NotFound';

const AppRouters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.authUser());
  }, []);

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={appRouters.HOME} component={Main} />
        <PrivateRoute exact path={appRouters.JOGS} component={Jogs} />
        <PrivateRoute exact path={appRouters.INFO} component={Info} />
        <PrivateRoute exact path={appRouters.CONTACT} component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

export default AppRouters;
