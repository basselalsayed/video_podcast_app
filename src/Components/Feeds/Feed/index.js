import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import VideoThumbnail from 'react-thumbnail-player';
import { ListGroupItem, Card, Spinner } from 'react-bootstrap';
import { feed, vidThumb } from './Feed.module.css';

const Feed = ({ feed: { link, title, pubDate }, idx, setNowPlayingRedux }) => (
  <ListGroupItem action onClick={() => setNowPlayingRedux(idx)}>
    <Card className={feed}>
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        {/* <HoverVideoPlayer
          className={vidThumb}
          videoSrc={link}
          loadingOverlay={<Spinner animation='border' />}
        /> */}
        <div>
          <VideoThumbnail
            width={350}
            preview={link}
            muted={true}
            badge='Live'
          />
          <VideoThumbnail />
        </div>
      </Card.Body>
      <Card.Footer>{pubDate}</Card.Footer>
    </Card>
  </ListGroupItem>
);

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setNowPlayingRedux: idx => dispatch({ type: 'SET_NOW_PLAYING', idx }),
});

export default connect(null, mapDispatchToProps)(Feed);
