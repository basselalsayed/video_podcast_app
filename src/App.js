import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import getRss from './api';

function App() {
  const [loading, setLoading] = useState(false);

  const rssHandler = async () => {
    setLoading(true);

    const response = await getRss();

    console.log('res.data:', response.data);
    setLoading(false);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{`${loading}`}</p>
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
