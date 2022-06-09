import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 items-stretch mt-12">
      {characters.map((character, i) => (
        <Card
          key={i}
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
