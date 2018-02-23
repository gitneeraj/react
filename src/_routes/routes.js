import React from 'react';
import {
    Router,
    Route,
    Switch
  } from 'react-router-dom';
import { history } from '../_helpers';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import { PrivateRoute } from '../_routes';

export const Routes = () => {
    return (
    <Router history={history}>
        <Switch>			
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/" component={Dashboard} />         
            <Route path="*" component={Login} />
        </Switch>
    </Router>);
}