import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Select A Photo', () => {
  const { getByText } = render(<App />);
  const navHeading = getByText(/select an image/i);
  expect(navHeading).toBeInTheDocument();
});

