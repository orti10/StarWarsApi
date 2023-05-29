import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import FilmSearchResults from './components/FilmSearchResults';
import CharacterTable from './components/CharacterTable';
import './App.css';

function App() {
  const [searchTitle, setSearchTitle] = useState('');
  const [titleName, setTitleName] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const itemsPerPage = 10;

  const handleSearchTitleChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setSearchClicked(true);
    try {
      setSearchLoading(true);
      const response = await fetch(`/films?title=${encodeURIComponent(searchTitle)}`);
      const data = await response.json();
      setFilms(data);
      setSelectedFilm(null);
      setCharacters([]);
      setCurrentPage(1);
      setTotalPages(0);
    } catch (error) {
      console.error('Error searching films:', error);
    } finally {
      setSearchLoading(false);
    }
  };

  // Update handleFilmSelect function to automatically select the film if there is only one result
  const handleFilmSelect = async (film) => {
    setSelectedFilm(film);
    setLoading(true);
    try {
      const filmUrl = film.url;
      const title = film.title;
      const filmId = filmUrl.match(/\d+(?=\/$)/)?.[0];
      const response = await fetch(`/films/${filmId}`);
      const filmData = await response.json();
      const data = await getCharactersData(filmData.characters);
      setTitleName(title);
      setCharacters(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
      setCurrentPage(1);
    } catch (error) {
      console.error('Error retrieving characters:', error);
      setCharacters([]);
      setTotalPages(0);
      setCurrentPage(1);
    } finally {
      setLoading(false); // Set loading state to false after data is fetched
    }
  };

  useEffect(() => {
    // Automatically select the film if there is only one result
    if (films.length === 1) {
      handleFilmSelect(films[0]);
    }
    // eslint-disable-next-line
  }, [films]);

  const getCharactersData = async (characters) => {
    try {
      const characterPromises = characters.map(async (character) => {
        const characterId = character.match(/\d+(?=\/$)/)?.[0];
        const response = await fetch(`/people/${characterId}`);
        const data = await response.json();
        return data;
      });
      const characterData = await Promise.all(characterPromises);
      return characterData;
    } catch (error) {
      console.error('Error retrieving characters:', error);
      return [];
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (loading || characters.length === 0 || !characters) {
      return (
        <tr>
          <td colSpan="1">Loading...</td>
        </tr>
      );
    }

    return characters.slice(startIndex, endIndex).map((character, index) => (
      <tr key={index}>
        <td>{character.name}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div>Created By Ortal Hanoch (Spitzer)</div>
      <div className='head'>Star Wars Film Search
        <SearchForm
          searchTitle={searchTitle}
          handleSearchTitleChange={handleSearchTitleChange}
          handleSearch={handleSearch}
        />
      </div>
      {searchLoading ? (
        <div className='results'>Loading...</div>
      ) : (
        films.length > 0 ? (
          <FilmSearchResults films={films} handleFilmSelect={handleFilmSelect} />
        ) : (
          searchClicked && searchTitle !== '' && films.length === 0 && (
            <div className='head'>No Results</div>
          )
        )
      )}

      {selectedFilm && (
        <CharacterTable
          loading={loading}
          filmName={titleName}
          characters={characters}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          renderTableRows={renderTableRows}
        />
      )}
    </div>
  );
}

export default App;
