import React from 'react';
import PropTypes from 'prop-types';
import HoverVideoPlayer from 'react-hover-video-player';

import { ListGroupItem, Card, Spinner } from 'react-bootstrap';
import './Feed.css';

const Feed = ({ feed }) => (
  <ListGroupItem action href='#link1'>
    <Card className='feed'>
      <Card.Body>
        <HoverVideoPlayer
          className='vid-thumb'
          videoSrc={feed.link}
          loadingOverlay={<Spinner animation='border' />}
        />
      </Card.Body>
      <Card.Title>{feed.title}</Card.Title>
      <Card.Footer>{feed.pubDate}</Card.Footer>
    </Card>
  </ListGroupItem>
);

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
};

export { Feed };
