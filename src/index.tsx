import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import Router from './router';
import { Provider } from './store';
import * as serviceWorker from './serviceWorker';
import './sass/global.scss';
import './utils/rem';

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (...args: [any, any?]) => fetch(...args).then((res) => res.json())
      }}
    >
      <Provider>
        <Router />
      </Provider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
