import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchfield, setSearchfield] = useState("");


  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((charactersAll) => {
        setCharacters(charactersAll);
      });
  }, []);


  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };


  if (characters?.length > 0) {
    const filteredCharacters = characters?.filter((character) => {
      return (
        character.name.toLowerCase().startsWith(searchfield?.toLowerCase()) ||
        character.house.toLowerCase().startsWith(searchfield?.toLowerCase()) ||
        character.wand.wood
          .toLowerCase()
          .startsWith(searchfield?.toLowerCase()) ||
        character.wand.core
          .toLowerCase()
          .startsWith(searchfield?.toLowerCase()) ||
        character.ancestry
          .toLowerCase()
          .startsWith(searchfield?.toLowerCase()) ||
        character.dateOfBirth.toLowerCase().includes(searchfield?.toLowerCase())
      );
    });

    return (
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="font-bold text-white text-2xl mt-4">
          Harry Potter Characters
        </h1>
        
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList characters={filteredCharacters} />
        </Scroll>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="font-bold text-center text-white text-2xl mt-4">
          Harry Potter Characters
        </h1>
        <p className="text-white text-xl text-center mt-12">
          Loading characters...
        </p>
      </>
    );
  }
}

export default App;
