import React from 'react';
import * as R from 'ramda';
import Router from './router';
import Global from './store/Global';

import { withFetcher, withStore } from './middleware';

import './sass/global.scss';

const wrapper = R.pipe(withStore(Global), withFetcher());

const App = () => {
  return wrapper(<Router />);
};

export default App;
