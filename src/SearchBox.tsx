import { ChangeEvent } from "react";

type seachBoxProps = {
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, onChangeHandler }: seachBoxProps) => {
  return (
    <div className="mt-4">
      <input
        className="border p-2 rounded-md  focus:outline-none"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
