import React from 'react';

function CharacterTable({ loading, filmName, characters, currentPage, totalPages, handlePageChange, renderTableRows }) {
  return (
    <div className='results'>
      <h2>Characters Of: {filmName}</h2>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'start' }}>Name</th>
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
            type="submit"
            className="previousButton"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous Page
          </button>
          <button
            type="submit"
            className="nextButton"
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