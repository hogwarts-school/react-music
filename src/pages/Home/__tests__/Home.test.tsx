import React from 'react';
import Home from '@pages/Home';
import renderWithRouter from '@test-tools/renderWithRouter';

test('renders element', () => {
  const { getByTestId } = renderWithRouter(<Home />);
  const el = getByTestId('homeTitle');
  expect(el).not.toBeNull();
});
