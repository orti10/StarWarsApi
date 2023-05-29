import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CharacterTable from '../CharacterTable';

test('renders character table with pagination', () => {
  const mockCharacters = [
    { name: 'Luke Skywalker' },
    { name: 'Leia Organa' },
    { name: 'Han Solo' },
    // ...more characters
  ];

  const handlePageChange = jest.fn();

  render(
    <CharacterTable
      loading={false}
      characters={mockCharacters}
      currentPage={1}
      totalPages={3}
      handlePageChange={handlePageChange}
      renderTableRows={() => (
        mockCharacters.map((character, index) => (
          <tr key={index}>
            <td>{character.name}</td>
          </tr>
        ))
      )}
    />
  );

  // Verify that character names are rendered
  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  expect(screen.getByText('Leia Organa')).toBeInTheDocument();
  expect(screen.getByText('Han Solo')).toBeInTheDocument();

  // Verify pagination buttons
  const previousButton = screen.getByText('Previous Page');
  const nextButton = screen.getByText('Next Page');

  expect(previousButton).toBeDisabled(); // First page, previous button should be disabled
  expect(nextButton).not.toBeDisabled(); // Next button should be enabled

  // Click on the next page button
  fireEvent.click(nextButton);
  expect(handlePageChange).toHaveBeenCalledWith(2); // handlePageChange should be called with the correct page number
});