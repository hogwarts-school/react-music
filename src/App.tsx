import React from 'react';
import * as R from 'ramda';
import Router from './router';
import { User } from './store';
import { withFetcher, withStore } from './middleware';

import './sass/global.scss';

const wrapper = R.pipe(withStore(User), withFetcher());

const App = () => wrapper(<Router />);

export default App;
