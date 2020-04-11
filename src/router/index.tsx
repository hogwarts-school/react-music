import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from '@pages/Login';
import HomeTabBar from '@pages/HomeTabBar';
import User from '@pages/User';

import FirstScreen from '@components/first-screen';
import SuspensionBall from '@components/suspension-ball';

import RouteGuard from './RouteGuard';

export default () => {
  return (
    <Router>
      <FirstScreen />
      <SuspensionBall />
      <Switch>
        <RouteGuard exact path="/tab-bar" component={HomeTabBar} />
        <RouteGuard exact path="/user-info" component={User} />
        <Route exact path="/login" component={Login} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};
