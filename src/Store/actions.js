import { getVisibleFeeds, parseVideoContent, splitFeed } from './helpers';

const handleSectionChange = (type, state) => {
  let visibleFeeds = getVisibleFeeds(type, state);
  const currentFeeds = state.splitFeeds[visibleFeeds];
  let next = visibleFeeds === currentFeeds.length - 1;
  let prev = visibleFeeds === 0;
  const disabled = { next, prev };
  return {
    ...state,
    disabled,
    currentFeeds,
    visibleFeeds,
  };
};

const setFeed = (state, action) => {
  const splitFeeds = splitFeed(action.payload.feed.items);
  return {
    ...state,
    ...action.payload,
    currentFeeds: splitFeeds[state.visibleFeeds],
    splitFeeds,
  };
};

const setLoading = (state, action) => ({
  ...state,
  ...action.payload,
});

const setNowPlaying = (state, action) => {
  const nowPlaying = state.currentFeeds[action.idx];
  return {
    ...state,
    nowPlaying: { ...nowPlaying, ...parseVideoContent(nowPlaying.content) },
  };
};

export { handleSectionChange, setFeed, setLoading, setNowPlaying };
