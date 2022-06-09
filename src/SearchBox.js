import React from "react";

const SeatchBox = ({ searchChange }) => {
  return (
    <div className="mt-4">
      <input
        className="border p-2 rounded-md  focus:outline-none"
        type="search"
        name=""
        id=""
        placeholder="Search Characters"
        onChange={searchChange}
      />
    </div>
  );
};

export default SeatchBox;
