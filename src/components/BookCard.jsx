import React from 'react';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="p-4 border rounded shadow">
      <img src={coverUrl} alt={book.title} className="mb-2" />
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-sm">{book.author_name?.join(', ')}</p>
      <p className="text-xs text-gray-500">
        First Published: {book.first_publish_year || 'N/A'}
      </p>
    </div>
  );
};

export default BookCard;
