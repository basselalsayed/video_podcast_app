import parseVideoContent from './helpers';

const initialState = {
  feed: [],
  loading: false,
  nowPlaying: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FEED':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_NOW_PLAYING':
      const nowPlaying = state.feed.items[action.idx];
      return {
        ...state,
        nowPlaying: { ...nowPlaying, ...parseVideoContent(nowPlaying.content) },
      };
    default:
      return state;
  }
};

export default rootReducer;
