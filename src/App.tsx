import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import {getData} from './utils/data.utils';


export type Person = {
  id: string;
  name: string;
  house: string;
  wand: {
    wood: string;
    core: string;
    length: string;
  }
  ancestry: string;
  dob: string;
  patronus: string;
  imgUrl: string;
}

const App = () => {
  const [searchfield, setSearchfield] = useState("");
  const [characters, setCharacters] = useState<Person[]>([]);

  useEffect(() => {

    const fetchCharacters = async () => {
      const characters = await getData<Person[]>('https://hp-api.herokuapp.com/api/characters');
      setCharacters(characters);
    }
    fetchCharacters();
  }, []);


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
          .startsWith(searchfield?.toLowerCase()) 
        // character.dob.toLowerCase().includes(searchfield?.toLowerCase())
      );
    });

    return (
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="font-bold text-white text-2xl mt-4">
          Harry Potter Characters
        </h1>
        
        <SearchBox placeholder="Search Characters" onChangeHandler={onSearchChange} />
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
