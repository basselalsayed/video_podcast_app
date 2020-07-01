import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { newRss } from './api';
import { Header } from './Components';

function App() {
  const [loading, setLoading] = useState(false);

  const rssHandler = async () => {
    setLoading(true);

    const response = await newRss();

    console.log('res.data:', response);
    setLoading(false);
  };

  return (
    <div className='App'>
      <Header />
      <p>{`${loading}`}</p>

      <header className='App-header'>
        <button onClick={rssHandler}>Get Rss</button>
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
        </a>
      </header>
    </div>
  );
}

export default App;
