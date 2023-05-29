import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilmSearchResults from '../FilmSearchResults';

const films = [
  {
    id: 1,
    title: 'Film 1',
    director: 'Director 1',
    release_date: '2022-01-01',
  },
  {
    id: 2,
    title: 'Film 2',
    director: 'Director 2',
    release_date: '2022-02-02',
  },
];

test('renders FilmSearchResults component with films', () => {
  render(<FilmSearchResults films={films} />);
  const filmRows = screen.getAllByRole('row');
  expect(filmRows.length).toBe(films.length + 1); // Including table header row
});

test('calls handleFilmSelect when a film row is clicked', () => {
  const handleFilmSelect = jest.fn();
  render(<FilmSearchResults films={films} handleFilmSelect={handleFilmSelect} />);
  const filmRow = screen.getByText(/Film 1/);
  fireEvent.click(filmRow);
  expect(handleFilmSelect).toHaveBeenCalledTimes(1);
  expect(handleFilmSelect).toHaveBeenCalledWith(films[0]);
});