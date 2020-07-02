import { parseVideoContent, splitFeed } from './helpers';

const initialState = {
  currentFeeds: [],
  feed: [],
  loading: false,
  nowPlaying: {},
  splitFeeds: [],
  visibleFeeds: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FEED':
      const splitFeeds = splitFeed(action.payload.feed.items);
      return {
        ...state,
        ...action.payload,
        splitFeeds,
        currentFeeds: splitFeeds[state.visibleFeeds],
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
    case 'INC_VISIBLE_FEEDS': {
      let visibleFeeds =
        state.visibleFeeds === state.splitFeeds.length - 1
          ? state.visibleFeeds
          : state.visibleFeeds + 1;
      return {
        ...state,
        visibleFeeds,
        currentFeeds: state.splitFeeds[visibleFeeds],
      };
    }
    case 'DEC_VISIBLE_FEEDS': {
      let visibleFeeds =
        state.visibleFeeds === 0 ? state.visibleFeeds : state.visibleFeeds - 1;
      return {
        ...state,
        visibleFeeds,
        currentFeeds: state.splitFeeds[visibleFeeds],
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
