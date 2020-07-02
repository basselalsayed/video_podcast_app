import React, { useContext } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import HoverVideoPlayer from 'react-hover-video-player';

import { ListGroupItem, Card, Spinner } from 'react-bootstrap';
import { VideoContext } from '../../Video/context';
import { feed, vidThumb } from './Feed.module.css';

const Feed = ({ feed: { title, link, pubDate }, setNowPlayingRedux }) => {
  const { setNowPlaying } = useContext(VideoContext);

  return (
    <ListGroupItem action onClick={() => setNowPlayingRedux(link)}>
      <Card className={feed}>
        <Card.Title>{title}</Card.Title>
        <Card.Body>
          <HoverVideoPlayer
            className={vidThumb}
            videoSrc={link}
            loadingOverlay={<Spinner animation='border' />}
          />
        </Card.Body>
        <Card.Footer>{pubDate}</Card.Footer>
      </Card>
    </ListGroupItem>
  );
};

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setNowPlayingRedux: nowPlaying =>
    dispatch({ type: 'SET_NOW_PLAYING', payload: { nowPlaying } }),
});

export default connect(null, mapDispatchToProps)(Feed);
