import React, { Component, useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  async componentDidMount() {
    try {
      const res = await fetch("https://hp-api.herokuapp.com/api/characters");
      const charactersAll = await res.json();
      this.setState({ characters: charactersAll });
    } catch (error) {
      console.log({ error });
    }
  }



  render() {
    if (this.state.characters?.length > 0) {
      const filteredCharacters = this.state.characters?.filter((character) => {
        return (
          character.name
            .toLowerCase()
            .startsWith(this.state.searchfield?.toLowerCase()) ||
          character.house
            .toLowerCase()
            .startsWith(this.state.searchfield?.toLowerCase()) ||
          character.wand.wood
            .toLowerCase()
            .startsWith(this.state.searchfield?.toLowerCase())
            ||
          character.wand.core
            .toLowerCase()
            .startsWith(this.state.searchfield?.toLowerCase())
            ||
          character.ancestry
            .toLowerCase()
            .startsWith(this.state.searchfield?.toLowerCase())
            ||
            character.dateOfBirth
              .toLowerCase()
              .includes(this.state.searchfield?.toLowerCase())
        );
      });

      return (
        <div className="container flex flex-col items-center justify-center mx-auto">
          <h1 className="font-bold text-white text-2xl mt-4">
            Harry Potter Characters
          </h1>
          <SearchBox searchChange={this.onSearchChange} />
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
        <p className='text-white text-xl text-center mt-12'>Loading characters...</p>
        </>
      )
    }
  }
}

export default App;
