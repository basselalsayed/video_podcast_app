import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes, { left, right, row } from './App.module.css';

import { getRss } from './api';
import { Header, Feeds, Video } from './Components';
import { Spinner } from 'react-bootstrap';

import withClass from './hoc/withClass';

const App = ({
  feed: { title, description, link },
  loading,
  setFeed,
  setLoading,
}) => {
  const rssHandler = async () => {
    setLoading(true);

    const response = await getRss();

    setFeed(response);
    setLoading(false);
  };

  useEffect(() => {
    rssHandler();
  }, []);

  return (
    <>
      <Header
        title={title || 'Welcome'}
        description={description || 'Lorem Ipsum'}
        link={link}
        rssHandler={rssHandler}
      />
      {loading ? (
        <Spinner animation='border' />
      ) : (
        <div className={row}>
          <div className={left}>
            <Feeds />
          </div>

          <Video />
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
