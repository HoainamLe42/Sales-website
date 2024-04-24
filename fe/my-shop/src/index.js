import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/users/HomePage/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Header</h2>
    <h2>Body</h2>
    <h2>Footer</h2>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
