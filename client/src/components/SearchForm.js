import React from 'react';

function SearchForm({ searchTitle, handleSearchTitleChange, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        className='textField'
        placeholder="Search for a Star Wars film"
        value={searchTitle}
        onChange={handleSearchTitleChange}
      />
      <button type="submit" className="searchButton">Search</button>
    </form>
  );
}

export default SearchForm;