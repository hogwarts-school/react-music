import React from 'react';
import * as R from 'ramda';
import Router from './router';
import { User, Global } from './store';
import { withFetcher, withStore } from './middleware';

import './sass/global.scss';

const wrapper = R.pipe(withStore(User), withStore(Global), withFetcher());

const App = () => {
  return wrapper(<Router />);
};

export default App;
