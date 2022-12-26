import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios
      .get('/api/hello')
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
          <div> from backend : {hello}</div>
        </a>
      </header>
    </div>
  );
}

export default App;
