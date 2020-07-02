import React from 'react';
import { connect } from 'react-redux';

import ReactPlayer from 'react-player/lazy';
import { Card } from 'react-bootstrap';

const VideoBase = ({
  nowPlaying: { content, link, parsedDescription, parsedHtml },
}) => (
  <Card>
    {content && (
      <>
        <ReactPlayer url={link} controls />
        <Card.Body>{parsedDescription}</Card.Body>
        <Card.Footer dangerouslySetInnerHTML={{ __html: parsedHtml }} />
      </>
    )}
  </Card>
);

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
});

const Video = connect(mapStateToProps)(VideoBase);

export { Video };
