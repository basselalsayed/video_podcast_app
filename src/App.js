import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import classes, { column, row } from './App.module.css';

import { newRss } from './api';
import { Header, Feeds, Video } from './Components';
import { Spinner } from 'react-bootstrap';
import { VideoContext } from './Components/Video/context';
import withClass from './hoc/withClass';

const App = ({
  loadingRedux,
  feedRedux,
  nowPlayingRedux,
  setLoadingRedux,
  setFeedRedux,
}) => {
  // const [loading, setLoading] = useState(false);
  // const [feed, setFeed] = useState({});
  const [nowPlaying, setNowPlaying] = useState(
    'http://pmd.cdn.turner.com/cnn/big/cnn10/2020/06/13/ten-0615.cnn_3275653_ios_1240.mp4',
  );

  // const rssHandler = async () => {
  //   setLoading(true);

  //   const response = await newRss();

  //   setFeed(response);
  //   setLoading(false);
  // };

  const rssHandlerRedux = async () => {
    setLoadingRedux(true);

    const response = await newRss();

    setFeedRedux(response);
    setLoadingRedux(false);
  };

  useEffect(() => {
    rssHandlerRedux();
  }, []);

  return (
    <VideoContext.Provider value={{ nowPlaying, setNowPlaying }}>
      <Header
        title={feedRedux.title || 'Welcome'}
        description={feedRedux.description || 'Lorem Ipsum'}
        rssHandler={rssHandlerRedux}
      />
      {loadingRedux ? (
        <Spinner animation='border' />
      ) : (
        <div className={row}>
          <div className={column}>
            <Feeds feeds={feedRedux.items} />
          </div>
          <div className={column}>
            <Video />
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
};

const mapStateToProps = state => ({
  loadingRedux: state.loading,
  feedRedux: state.feed,
  nowPlayingRedux: state.nowPlaying,
});

const mapDispatchToProps = dispatch => ({
  setLoadingRedux: loading =>
    dispatch({ type: 'SET_LOADING', payload: { loading } }),
  setFeedRedux: feed => dispatch({ type: 'SET_FEED', payload: { feed } }),
});

const StyledApp = withClass(App, classes.App);

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
