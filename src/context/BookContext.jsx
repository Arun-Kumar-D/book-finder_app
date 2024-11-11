import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = (query) => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${query}`
        );
        const data = await response.json();
        setBooks(data.docs);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  };

  return (
    <BookContext.Provider value={{ books, fetchBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};
