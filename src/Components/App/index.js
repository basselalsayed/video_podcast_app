import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRss, isDirectional } from '../../Helpers';
import classes, { left, row } from './App.module.css';

import { Header, Feeds, Video } from '../';
import { Spinner } from 'react-bootstrap';

import { ARROW_KEYS } from '../../Constants';

const [UP, DOWN, LEFT, RIGHT] = ARROW_KEYS;

const AppBase = ({
  arrowPress,
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

  const handleKeyDown = e => {
    if (isDirectional(e.key)) e.preventDefault();

    switch (e.key) {
      case UP:
        return arrowPress(UP);
      case DOWN:
        return arrowPress(DOWN);
      case LEFT:
        return arrowPress(LEFT);
      case RIGHT:
        return arrowPress(RIGHT);
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    rssHandler();
  }, []);

  return (
    <div className={classes.App}>
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
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  feed: state.feed,
  nowPlaying: state.nowPlaying,
});

const mapDispatchToProps = dispatch => ({
  arrowPress: type => dispatch({ type }),
  setLoading: loading =>
    dispatch({ type: 'SET_LOADING', payload: { loading } }),
  setFeed: feed => dispatch({ type: 'SET_FEED', payload: { feed } }),
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppBase);

export { App };
