import React from 'react';
import { FiSearch } from 'react-icons/fi';


const Search = ({ currentCity, searchTerm, searchCity, searchSubmit }) => {
  return (
    <div className='search'>
      <div className='search-container'>
        <form className='search-bar' value={currentCity} onSubmit={searchSubmit}>
          <input type='text' placeholder='Type name of city to discover weather forecast...' className='search-input' value={searchTerm} onChange={searchCity}></input>
          <button type='submit' className="search-button">
            <FiSearch className='search-img' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search;