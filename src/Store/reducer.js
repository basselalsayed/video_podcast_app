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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FEED':
      let splitFeeds = splitFeed(action.payload.feed.items);
      return {
        ...state,
        ...action.payload,
        currentFeeds: splitFeeds[state.visibleFeeds],
        splitFeeds,
      };

    case 'SET_LOADING':
      return {
        ...state,
        ...action.payload,
      };

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
