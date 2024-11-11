import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { fetchBooks } = useBookContext();

  const handleSearch = () => {
    if (input.trim()) {
      fetchBooks(input);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for books by title..."
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
