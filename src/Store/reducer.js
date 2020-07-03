import {
  handleSectionChange,
  setFeed,
  setLoading,
  setNowPlaying,
} from './actions';

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
      return setFeed(state, action);

    case 'SET_LOADING':
      return setLoading(state, action);

    case 'SET_NOW_PLAYING':
      return setNowPlaying(state, action);

    case 'NEXT_FEED_LIST_SECTION':
      return handleSectionChange('next', state);

    case 'PREV_FEEDS_LIST_SECTION':
      return handleSectionChange('prev', state);

    default:
      return state;
  }
};

export default rootReducer;
