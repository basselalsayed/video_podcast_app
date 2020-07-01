import React from 'react';

const VideoContext = React.createContext({
  nowPlaying: null,
  setNowPlaying: () => {},
});

export { VideoContext };
