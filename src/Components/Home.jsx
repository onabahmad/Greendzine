import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import FetchData from "./FetchData";
import SearchBar from "./SearchBar";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsListStars } from "react-icons/bs";
import "../assets/Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGridView = () => {
    setIsGridView(false);
  };

  const handleListView = () => {
    setIsGridView(true);
  };

  // Fetch data and filter users based on search term
  const filteredUsers = (users) => {
    return users.filter((user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="Main_container">
      <div className="first_box">
        <div className="heading">
          <h1>AVATAR.</h1>
        </div>
        <div className="search">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        </div>
      </div>
      <div className="buttons">
        <button className="Grid_view_button" onClick={handleGridView}>
          {" "}
          <BsFillGrid3X3GapFill style={{ width: 30, height: 30 }} />
        </button>
        <button className="list_view_button" onClick={handleListView}>
          <BsListStars style={{ width: 30, height: 30 }} />
        </button>
      </div>
      <div className={`Box ${isGridView ? "grid-view" : "list-view"}`}>
        <FetchData>
          {(users) => {
            const filtered = filteredUsers(users);
            return (
              <>
                {filtered.length > 0 ? (
                  <Cards users={filtered} />
                ) : (
                  <p>No results found.</p>
                )}
              </>
            );
          }}
        </FetchData>
      </div>
    </div>
  );
};

export default Home;
