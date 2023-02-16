import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";

const App = () => {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
};

export default App;
