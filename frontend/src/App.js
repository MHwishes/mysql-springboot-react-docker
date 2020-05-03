import React,{ useEffect, useState } from 'react';
import  axios from 'axios';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        './books/',
      );
      console.log(result,"result");

      setBooks(result.data);
    };

    fetchData();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>book list</h2>
        <div>
          {books.map((book)=>{
            return (<li>{book.name}</li>)
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
