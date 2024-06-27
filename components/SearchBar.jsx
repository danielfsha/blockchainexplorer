"use client";

import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (searchText.length === 0) {
      alert("Please enter a search term");
      return;
    }
  };

  return (
    <form className="input" onSubmit={submitForm}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      <input
        name="search-text"
        className="bg-transparent pl-2 outline-none border-none text-sm flex-1"
        placeholder="Search Address, Token"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
      />

      <div className="flex items-center justify-center w-8 h-8 p-1 bg-white border shadow-sm rounded-lg shadow-gray-500/10">
        /
      </div>
    </form>
  );
};

export default SearchBar;
