import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {

  return (
    <div className="flex flex-wrap justify-center gap-4 items-stretch mt-12">
      {characters.map((character, i) => (
        <Card
          key={i}
          name={character.name}
          house={character.house}
          ancestry={character.ancestry}
          dob={character.dateOfBirth}
          imgUrl={character.image}
          wand={character.wand}
          patronus={character.patronus}
        />
      ))}
    </div>
  );
};

export default CardList;
