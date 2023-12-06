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
      <input type="text" placeholder="Name of the song" style={{ marginRight: "1rem", border: "var(--border-radius)" }} onChange={handleChange} />
      <button 
        className="btn btn-secondary"
        type="button"
        
        onClick={handleSearch} style={{ background: "none" }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
