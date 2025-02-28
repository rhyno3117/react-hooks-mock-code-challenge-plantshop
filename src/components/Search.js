import React from "react";

function Search({ setSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }
  console.log(setSearch)
  return (
    <div className="searchbar" >
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => { setSearch(e.target.value) }}
      />
    </div>
  );
}

export default Search;
