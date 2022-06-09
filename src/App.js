import React, { Component } from "react";
import CardList from "./CardList";
import { characters } from "./characters";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredCharacters = this.state.characters.filter((character) => {
      return (
        character.character
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        character.hogwartsHouse
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        character.nickname
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase())
      );
    });

    return (
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="font-bold text-2xl mt-4">
          Harry Potter Character Search
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
