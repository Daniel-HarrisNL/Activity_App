import React from 'react';
import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <>
      <form className="search-form" action="" >
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button"><FAIcon icon={faSearch} color="white"/></button>
      </form>
    </>
  )
}

export default SearchBar
