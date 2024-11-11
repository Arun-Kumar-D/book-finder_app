import React from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Book Finder</h1>
      <SearchBar />
      <BookList />
    </div>
  );
};

export default App;
