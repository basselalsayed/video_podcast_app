import {
  cycleDisplayedFeeds,
  handleArrowPress,
  setFeed,
  setLoading,
  setNowPlaying,
} from './actions';
import { ARROW_KEYS } from '../Constants';

const [UP, DOWN, LEFT, RIGHT] = ARROW_KEYS;

const initialState = {
  currentFeeds: [],
  currentFocus: { section: 0, item: 0 },
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
      return cycleDisplayedFeeds('next', state);

    case 'PREV_FEEDS_LIST_SECTION':
      return cycleDisplayedFeeds('prev', state);
    case UP:
      return handleArrowPress(UP, state);
    case DOWN:
      return handleArrowPress(DOWN, state);
    case LEFT:
      return handleArrowPress(LEFT, state);
    case RIGHT:
      return handleArrowPress(RIGHT, state);
    default:
      return state;
  }
};

export default rootReducer;
