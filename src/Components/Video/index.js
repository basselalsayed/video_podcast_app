import React from 'react';
import { connect } from 'react-redux';

import ReactPlayer from 'react-player/lazy';

const VideoBase = ({ nowPlaying: { link } }) => {
  return <ReactPlayer url={link} controls />;
};

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying,
});

const Video = connect(mapStateToProps)(VideoBase);

export { Video };
