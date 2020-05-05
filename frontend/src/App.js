import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');

  const fetchData = async () => {
    const result = await axios(
      '/books/',
    );
    setBooks(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = () => {
    axios.post('/books/', {
      name: bookName,
      author: author
    })
      .then(() => {
        setBookName('');
        setAuthor('');
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Add new Book</h2>
          <div className='input-group'>
            <div>
              <label className='label'>Please input book name:</label>
              <input className='input'
                     value={bookName}
                     onChange={(e) => setBookName(e.target.value)}/>
            </div>
            <div>
              <label className='label'>Please inout author:</label>
              <input className='input'
                     value={author}
                     onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>
          <button className='submit' onClick={() => handleSubmit()}> submit</button>
        </div>
        <div className='split-line'/>
        <h2>book list</h2>
        <div className='book-list'>
          {books.map((book) => {
            return (<li key={book.id}>{book.name}</li>);
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
