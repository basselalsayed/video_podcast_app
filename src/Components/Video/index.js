import React, { useContext } from 'react';
import ReactPlayer from 'react-player/lazy';
import { VideoContext } from './context';

const Video = () => {
  const { nowPlaying } = useContext(VideoContext);

  return <ReactPlayer url={nowPlaying} controls />;
};

export { Video };
