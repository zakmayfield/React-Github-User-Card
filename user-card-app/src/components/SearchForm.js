import React from 'react'

const SearchForm = props => {
  return (
    <div className="searchForm">
      <div className="subSearchForm">
        <input 
          type="text"
          placeholder="Search for a GitHub user by username!"
          value={props.searchText}
          onChange={props.handleChange}
          className="searchInput"
        />
        <button className="searchBtn" onClick={props.fetchPerson}>Find User</button>
      </div>
    </div>
  )
}

export default SearchForm;