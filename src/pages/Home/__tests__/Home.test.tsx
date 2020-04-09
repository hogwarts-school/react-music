import React from 'react';
import { render } from '@testing-library/react';
import Home from '../index';

import { Provider } from '@store/index';

test('renders learn react link', () => {
  const { getByTestId } = render(
    <Provider>
      <Home />
    </Provider>
  );
  const el = getByTestId('homeTitle');
  expect(el).not.toBeNull();
});
