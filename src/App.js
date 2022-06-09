import React from "react";
import CardList from "./CardList";
import { characters } from "./characters";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="font-bold text-2xl mt-4">Harry Potter Character Search</h1>
      <SearchBox />
      <CardList />
    </div>
  );
};

export default App;
