# Book Finder App

A simple React application to help users search for books using the Open Library Search API. This app is styled with Tailwind CSS and leverages React's built-in state management for simplicity and efficiency.

## Features

- Search for books by title using the Open Library API.
- Display book details including the title, author(s), and first publication year.
- Display book covers if available.
- Responsive UI with Tailwind CSS styling.

## Project Structure

```plaintext
src/
|-- components/
|   |-- SearchBar.js       # Component for the search input and button
|   |-- BookList.js        # Component to display a list of books
|   |-- BookCard.js        # Component to display individual book details
|
|-- context/
|   |-- BookContext.js     # Context to manage book data and fetch logic
|
|-- App.js                 # Main application component
|-- index.js               # Entry point of the app
|-- index.css              # Global styles including Tailwind CSS
```

## How It Works

### Components

- **`App.js`**: The main component that wraps the `SearchBar` and `BookList` components.
- **`SearchBar.js`**: A component with a text input and a button for the user to enter and submit a book title.
- **`BookList.js`**: Displays the list of books returned by the API.
- **`BookCard.js`**: Represents individual book details including the title, author(s), cover, and publication year.

### Context

- **`BookContext.js`**: A React context that manages the state of the books and fetch logic. This context provides `fetchBooks()` for searching and `books` for holding search results.

### Styling

- The project uses Tailwind CSS for quick and responsive styling. Ensure that Tailwind CSS is correctly set up in `index.css`.

## How to Use the App

1. **Enter a book title in the search bar.**
2. **Click on the "Search" button.**
   The app will fetch and display results, showing the book's cover, title, authors, and first publication year.

## Dependencies Used

- **`React`**: UI library
- **`Tailwind CSS`**: Styling
- **`useEffect and useState hooks`**: State management and side effects

## Future Enhancements

- Implement advanced search options (e.g., by author or ISBN).
- Add pagination to manage large result sets.
- Include a feature to save and favorite books.
- Add loading indicators and error handling for better UX.
