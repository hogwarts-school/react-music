import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '@pages/Login';
import Home from '@pages/Home';
import HomeTabBar from '@pages/HomeTabBar';
import User from '@pages/User';

import RouteGuard from './RouteGuard';

export default () => {
  console.log(123);
  return (
    <Router>
      <Switch>
      <Route exact path="/tab-bar" component={HomeTabBar} />
      <RouteGuard exact path="/user-info" component={User} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};
