import React from 'react';

function FilmSearchResults({ films, handleFilmSelect }) {
  return (
    <div className='results'>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody className='resultsList'>
          {films.map((film) => (
            <tr key={film.id} onClick={() => handleFilmSelect(film)} className="hoverable-row">
              <td>{film.title}</td>
              <td>{film.director}</td>
              <td>{film.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilmSearchResults;