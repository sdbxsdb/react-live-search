import React from "react";

const Card = ({ name, house, imgUrl, children }) => {
  return (
    <div className="bg-green-200 rounded p-2 flex flex-col items-center justify-center mx-2 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out w-[200px] min-h-[300px] h-full">
      <img width="150px" src={imgUrl} alt="" />
      <div className="text-center">
        <h2 className="font-bold">{name}</h2>
        <p>{house}</p>

        {children.length > 0 && <small>--Children--</small>}

        {children.map((child, i) => (
          <p key={i}>{child}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
