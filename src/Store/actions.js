import {
  arrowPress,
  getVisibleFeeds,
  parseVideoContent,
  splitFeed,
} from './helpers';

const cycleDisplayedFeeds = (type, state) => {
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

const setFeed = (state, { payload }) => {
  const splitFeeds = splitFeed(payload.feed.items);
  return {
    ...state,
    ...payload,
    currentFeeds: splitFeeds[state.visibleFeeds],
    splitFeeds,
  };
};

const setLoading = (state, action) => ({
  ...state,
  ...action.payload,
});

const setNowPlaying = (state, { idx }) => {
  const nowPlaying = state.currentFeeds[idx];
  return {
    ...state,
    nowPlaying: { ...nowPlaying, ...parseVideoContent(nowPlaying.content) },
  };
};

const handleArrowPress = (type, state) => ({
  ...state,
  currentFocus: arrowPress(type, state.currentFocus),
});

export {
  cycleDisplayedFeeds,
  handleArrowPress,
  setFeed,
  setLoading,
  setNowPlaying,
};
