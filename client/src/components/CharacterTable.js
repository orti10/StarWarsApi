import React from 'react';

function CharacterTable({ loading, characters, currentPage, totalPages, handlePageChange, renderTableRows }) {
  return (
    <div className='results'>
      <h2>Characters</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      {totalPages > 1 && (
        <div>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous Page
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
}

export default CharacterTable;