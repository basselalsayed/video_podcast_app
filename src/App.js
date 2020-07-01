import React, { useEffect, useState } from 'react';

import './App.css';

import { newRss } from './api';
import { Header, Feeds } from './Components';
import { Button } from 'react-bootstrap';

function App() {
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState({});

  const rssHandler = async () => {
    setLoading(true);

    const response = await newRss();

    console.log('res.data:', response);
    setFeed(response);
    setLoading(false);
  };

  useEffect(() => {
    rssHandler();
  }, []);

  return (
    <div className='App'>
      <Header
        title={feed.title || 'Welcome'}
        description={feed.description || 'Lorem Ipsum'}
      />
      <p>{`${loading}`}</p>

      <Button onClick={rssHandler}>Update Feed</Button>
      <Feeds feeds={feed.items} />
    </div>
  );
}

export default App;
