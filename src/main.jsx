import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BookProvider } from './context/BookContext';

ReactDOM.render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
