import React from 'react'

function SearchBar() {
  return (
    <div className="search-bar">
      <input className="search-input" placeholder="Enter search keywords..." />
      <button className="blue-btn small">Search</button>
    </div>
  )
}

export default SearchBar
