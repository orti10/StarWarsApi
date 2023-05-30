import React from 'react';

function FilmSearchResults({ films, handleFilmSelect }) {
  const style = { textAlign: 'start' };
  const columnSpacing = { paddingLeft: '10px', paddingRight: '10px' }; // Adjust the spacing as needed

  return (
    <div className='results'>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th style={columnSpacing}>#</th>
            <th style={{ ...style, ...columnSpacing }}>Title</th>
            <th style={{ ...style, ...columnSpacing }}>Director</th>
            <th style={{ ...style, ...columnSpacing }}>Release Date</th>
          </tr>
        </thead>
        <tbody className='resultsList'>
          {films.map((film, index) => (
            <tr key={index} onClick={() => handleFilmSelect(film)}>
              <td style={columnSpacing}>{index + 1}</td>
              <td style={{ ...style, ...columnSpacing }}>{film.title}</td>
              <td style={{ ...style, ...columnSpacing }}>{film.director}</td>
              <td style={{ ...style, ...columnSpacing }}>{film.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilmSearchResults;