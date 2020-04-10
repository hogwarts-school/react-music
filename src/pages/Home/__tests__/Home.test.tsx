import React from 'react';
import Home from '../index';
import { renderWithRouter } from '@test-tools/renderWithRouter';

test('renders text', () => {
  const { getByTestId } = renderWithRouter(<Home />);
  const el = getByTestId('homeTitle');
  expect(el).not.toBeNull();
});
