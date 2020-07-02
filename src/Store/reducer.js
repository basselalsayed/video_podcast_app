const initialState = {
  feed: [],
  loading: false,
  nowPlaying: '',
};
// Reducer

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
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
