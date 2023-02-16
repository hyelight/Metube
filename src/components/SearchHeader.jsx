import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

const SearchHeader = () => {
  const [text, setText] = useState("");
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  // 검색 시 검색 창에 keyword 유무 설정
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="flex border-b border-gray-600 text-2xl p-3.5 ">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold text-3xl ml-3">Metube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-8/12 p-1 bg-black text-#9CA39F-400 text-xl rounded-3xl p-1.5 pl-5"
          type="text"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="ml-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
