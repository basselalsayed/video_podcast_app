import { parseVideoContent, splitFeed } from './helpers';

const initialState = {
  currentFeeds: [],
  canScroll: { next: true, prev: false },
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

    case 'NEXT_FEED_LIST_SECTION': {
      let visibleFeeds =
        state.visibleFeeds === state.splitFeeds.length - 1
          ? state.visibleFeeds
          : state.visibleFeeds + 1;

      const currentFeeds = state.splitFeeds[visibleFeeds];
      let next = visibleFeeds !== currentFeeds.length - 1;
      let prev = visibleFeeds !== 0;
      const canScroll = { next, prev };
      return {
        ...state,
        canScroll,
        currentFeeds,
        visibleFeeds,
      };
    }

    case 'PREV_FEEDS_LIST_SECTION': {
      let visibleFeeds =
        state.visibleFeeds === 0 ? state.visibleFeeds : state.visibleFeeds - 1;

      const currentFeeds = state.splitFeeds[visibleFeeds];
      let next = visibleFeeds !== currentFeeds.length - 1;
      let prev = visibleFeeds !== 0;
      const canScroll = { next, prev };
      return {
        ...state,
        canScroll,
        currentFeeds,
        visibleFeeds,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
