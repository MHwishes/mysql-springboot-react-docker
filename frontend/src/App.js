import React,{ useEffect, useState } from 'react';
import  axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [books, setBooks] = useState({ books: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/books/',
      );
      console.log(result,"result");

      setBooks(result.data);
    };

    fetchData();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
