import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};
