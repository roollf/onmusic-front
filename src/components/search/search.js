'use client';
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    document.location.href = `/search?term=${searchTerm}`;
  };

  return (
    <div>
      <input type="text" placeholder="Name of the song" onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
