import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import VideoThumbnail from 'react-thumbnail-player';
import { ListGroupItem, Card } from 'react-bootstrap';
import { feed, vidThumb, textContent } from './Feed.module.css';

const FeedBase = ({
  feed: { creator, link, title, pubDate },
  idx,
  setNowPlayingRedux,
}) => (
  <ListGroupItem
    style={{ padding: 0 }}
    action
    onClick={() => setNowPlayingRedux(idx)}
  >
    <Card>
      <div className={feed}>
        <VideoThumbnail
          classname={vidThumb}
          width={'115%'}
          message=''
          badge={`${creator}`}
          title={null}
          preview={link}
          muted={true}
        />

        <div className={textContent}>
          <Card.Title>{title}</Card.Title>
          <Card.Footer>{pubDate}</Card.Footer>
        </div>
      </div>
    </Card>
  </ListGroupItem>
);

FeedBase.propTypes = {
  feed: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setNowPlayingRedux: idx => dispatch({ type: 'SET_NOW_PLAYING', idx }),
});

const Feed = connect(null, mapDispatchToProps)(FeedBase);

export default Feed;
