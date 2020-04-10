import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from '@store/index';

export function renderWithRouter(
  ui: React.ReactElement,
  { route: string = '/', history = createMemoryHistory<any>({ initialEntries: ['/'] }) } = {}
) {
  const Wrapper: React.FC<{}> = ({ children }) => (
    <Provider>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}

export type RenderWithRouter = typeof renderWithRouter;
