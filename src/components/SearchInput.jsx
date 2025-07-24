import React, { useEffect, useRef } from 'react';

const SearchInput = ({ onSearch }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4 items-center justify-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by country name!!"
        onChange={handleChange}
        className="px-4 py-2 border rounded-md shadow-sm w-72"
      />
    </div>
  );
};

export default SearchInput;
