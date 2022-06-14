import React from "react";

const Card = ({ name, house, imgUrl, ancestry, dob, wand, patronus }) => {

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const ancestryCapitalized = capitalizeFirstLetter(ancestry);
  const wandCoreCapitalized = capitalizeFirstLetter(wand.core);
  const wandWoodCapitalized = capitalizeFirstLetter(wand.wood);
  const patronusCapitalized = capitalizeFirstLetter(patronus);

  return (
    <div className="bg-gray-600 rounded p-2 flex flex-col items-center justify-center mx-2 shadow-xl transition-all text-gray-100 duration-300 ease-in-out w-[200px] min-h-[300px] h-full">
      <img width="150px" src={imgUrl} alt="" />
      <div className="text-center">
        <h2 className="font-bold">{name}</h2>
        <p>{dob}</p>
        <p>{house}</p>
        <p>{ancestryCapitalized}</p>

        {wand.wood && 
        <>
          <p>Wand:</p>
          <ul>
            <li>{wandCoreCapitalized}</li>
            {wand.length && <li>{wand.length} inches</li>}
            <li>{wandWoodCapitalized}</li>
          </ul>
          </>
        }

        {patronus && 
          <p>Patronus: {patronusCapitalized}</p>
        }
        
      </div>
    </div>
  );
};

export default Card;
