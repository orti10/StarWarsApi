import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../SearchForm';

test('renders SearchForm component', () => {
  render(<SearchForm />);
  const searchInput = screen.getByPlaceholderText(/Search for a Star Wars film/i);
  expect(searchInput).toBeInTheDocument();
});

test('calls handleSearchTitleChange when search input value changes', () => {
  const handleSearchTitleChange = jest.fn();
  render(<SearchForm handleSearchTitleChange={handleSearchTitleChange} />);
  const searchInput = screen.getByPlaceholderText(/Search for a Star Wars film/i);
  fireEvent.change(searchInput, { target: { value: 'Episode IV' } });
  expect(handleSearchTitleChange).toHaveBeenCalledTimes(1);
  expect(handleSearchTitleChange).toHaveBeenCalledWith(expect.any(Object));
});