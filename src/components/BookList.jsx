import React from 'react';
import { useBookContext } from '../context/BookContext';
import BookCard from './BookCard';

const BookList = () => {
  const { books } = useBookContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.length > 0 ? (
        books.map((book, index) => <BookCard key={index} book={book} />)
      ) : (
        <p className="text-center col-span-full">
          No results found. Try a different search term.
        </p>
      )}
    </div>
  );
};

export default BookList;
