import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes, { column, row } from './App.module.css';

import { getRss } from './api';
import { Header, Feeds, Video } from './Components';
import { Spinner } from 'react-bootstrap';

import withClass from './hoc/withClass';

const App = ({ feed, loading, setFeed, setLoading }) => {
  const rssHandler = async () => {
    setLoading(true);

    const response = await getRss();
    console.log('response', response);

    setFeed(response);
    setLoading(false);
  };

  useEffect(() => {
    rssHandler();
  }, []);

  return (
    <>
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
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  feed: state.feed,
  nowPlaying: state.nowPlaying,
});

const mapDispatchToProps = dispatch => ({
  setLoading: loading =>
    dispatch({ type: 'SET_LOADING', payload: { loading } }),
  setFeed: feed => dispatch({ type: 'SET_FEED', payload: { feed } }),
});

const StyledApp = withClass(App, classes.App);

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
