import React from "react";
import "../assets/Searchbar.css";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <input
        className="searchbar"
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Search Name...."
      />
    </div>
  );
};

export default SearchBar;
