import React, { useEffect, useState } from 'react';

import classes, { column, row } from './App.module.css';

import { newRss } from './api';
import { Header, Feeds, Video } from './Components';
import { Spinner } from 'react-bootstrap';
import { VideoContext } from './Components/Video/context';
import withClass from './hoc/withClass';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState({});
  const [nowPlaying, setNowPlaying] = useState(
    'http://pmd.cdn.turner.com/cnn/big/cnn10/2020/06/13/ten-0615.cnn_3275653_ios_1240.mp4',
  );

  const rssHandler = async () => {
    setLoading(true);

    const response = await newRss();

    setFeed(response);
    setLoading(false);
  };

  useEffect(() => {
    rssHandler();
  }, []);

  return (
    <VideoContext.Provider value={{ nowPlaying, setNowPlaying }}>
      <Header
        title={feed.title || 'Welcome'}
        description={feed.description || 'Lorem Ipsum'}
        rssHandler={rssHandler}
      />
      {loading ? (
        <Spinner animation='border' />
      ) : (
        <div className={row}>
          <div className={column}>
            <Feeds feeds={feed.items} />
          </div>
          <div className={column}>
            <Video />
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
};

export default withClass(App, classes.App);
