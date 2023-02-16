import React, { useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const SearchHeader = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  return (
    <header>
      <Link to="/">
        <BsYoutube />
        <h1>Metube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
