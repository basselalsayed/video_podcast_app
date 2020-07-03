import { handleSectionChange, parseVideoContent, splitFeed } from './helpers';

const initialState = {
  currentFeeds: [],
  disabled: { next: false, prev: true },
  feed: [],
  loading: false,
  nowPlaying: {},
  splitFeeds: [],
  visibleFeeds: 0,
};

const setFeed = (state, action) => {
  let splitFeeds = splitFeed(action.payload.feed.items);
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FEED':
      return setFeed(state, action);

    case 'SET_LOADING':
      return setLoading(state, action);

    case 'SET_NOW_PLAYING':
      const nowPlaying = state.currentFeeds[action.idx];
      return {
        ...state,
        nowPlaying: { ...nowPlaying, ...parseVideoContent(nowPlaying.content) },
      };

    case 'NEXT_FEED_LIST_SECTION':
      return { ...handleSectionChange('next', state) };

    case 'PREV_FEEDS_LIST_SECTION':
      return { ...handleSectionChange('prev', state) };

    default:
      return state;
  }
};

export default rootReducer;
