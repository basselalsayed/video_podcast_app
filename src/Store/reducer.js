import { parseVideoContent, splitFeed } from './helpers';

const initialState = {
  currentFeeds: [],
  disabled: false,
  feed: [],
  loading: false,
  nowPlaying: {},
  splitFeeds: [],
  visibleFeeds: 0,
};

const rootReducer = (state = initialState, action) => {
  const disabled = state.visibleFeeds === (0 || state.splitFeeds.length - 1);
  let visibleFeeds;
  const currentFeeds = state.splitFeeds[visibleFeeds];

  const DEFAULT_VISIBLE_FEEDS_RETURN = {
    ...state,
    currentFeeds,
    disabled,
    visibleFeeds,
  };
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
    case 'INC_VISIBLE_FEEDS':
      visibleFeeds =
        state.visibleFeeds === state.splitFeeds.length - 1
          ? state.visibleFeeds
          : state.visibleFeeds + 1;
      return DEFAULT_VISIBLE_FEEDS_RETURN;

    case 'DEC_VISIBLE_FEEDS':
      visibleFeeds =
        state.visibleFeeds === 0 ? state.visibleFeeds : state.visibleFeeds - 1;
      return DEFAULT_VISIBLE_FEEDS_RETURN;

    default:
      return state;
  }
};

export default rootReducer;
