import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const headingElement = screen.getByText(/Star Wars Film Search/i);
  expect(headingElement).toBeInTheDocument();
});

test('updates searchTitle when search input value changes', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search for a Star Wars film/i);
  fireEvent.change(searchInput, { target: { value: 'Episode IV' } });
  expect(searchInput.value).toBe('Episode IV');
});