import React from 'react';
import { connect } from 'react-redux';

import ReactPlayer from 'react-player/lazy';
import { Card } from 'react-bootstrap';
import { right } from '../App/App.module.css';

const VideoBase = ({
  nowPlaying: { content, link, parsedDescription, parsedHtml },
}) => (
  <div className={right}>
    {content && (
      <>
        <ReactPlayer
          id='main-vid'
          style={{ padding: 10 }}
          width={'inherit'}
          height={'inherit'}
          url={link}
          controls
        />
        <Card.Body>{parsedDescription}</Card.Body>
        <Card.Footer dangerouslySetInnerHTML={{ __html: parsedHtml }} />
      </>
    )}
  </div>
);

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
});

const Video = connect(mapStateToProps)(VideoBase);

export { Video };
