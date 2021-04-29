/* eslint-disable */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../pages/index';

test('renders hi bmo! text', () => {
  render(<Home />);

  const textElement = screen.getByText('Hi BMO!');

  expect(textElement).toBeInTheDocument();
});
