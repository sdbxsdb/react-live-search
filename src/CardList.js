import React from "react";
import { characters } from "./characters";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 items-stretch mt-12">
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.character}
          house={character.hogwartsHouse}
          imgUrl={character.image}
          children={character.child}
        />
      ))}
    </div>
  );
};

export default CardList;
