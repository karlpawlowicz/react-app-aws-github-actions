/* eslint-disable */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../pages/index';

test('renders welcome to text', () => {
  render(<Home />);

  const textElement = screen.getByText('Welcome');

  expect(textElement).toBeInTheDocument();
});
