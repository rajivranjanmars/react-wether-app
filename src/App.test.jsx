import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the city search control', () => {
  render(<App />);
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});