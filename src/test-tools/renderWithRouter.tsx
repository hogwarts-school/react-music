import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { User } from '@src/store';
import { withStore } from '@src/middleware';
import * as R from 'ramda';

const wrapper = R.pipe(withStore(User));

export default function renderWithRouter(
  ui: React.ReactElement,
  { route: string = '/', history = createMemoryHistory<any>({ initialEntries: ['/'] }) } = {}
) {
  const Wrapper: React.FC<{}> = ({ children }) => {
    return wrapper(<Router history={history}>{children}</Router>);
  };
  return {
    ...render(ui, { wrapper: Wrapper }),
    history
  };
}

export type RenderWithRouter = typeof renderWithRouter;
