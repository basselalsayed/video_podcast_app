import {
  handleSectionChange,
  setFeed,
  setLoading,
  setNowPlaying,
} from './actions';
import {
  ARROW_NAV_SECTION_TITLES,
  ARROW_KEYS,
  ARROW_NAV_SECTIONS,
  SECTION_LENGTHS,
} from '../Constants';
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

const focusElement = elementId => {
  let element = document.querySelector('#' + elementId);
  element && element.focus();
};

const focusVideo = () =>
  document.querySelectorAll('div#main-vid > video').forEach(el => el.focus());

const listFocus = (arrow, { item, section }) => {
  switch (arrow) {
    case UP:
      if (item === 0) {
        return [section - 1, item];
      } else {
        return [section, item - 1];
      }
    case DOWN:
      if (item === SECTION_LENGTHS[section]) {
        return [section, item];
      } else {
        return [section, item + 1];
      }
    case LEFT:
      return [section, item];
    case RIGHT:
      return [2, 0];

    default:
      break;
  }
};

const normalFocus = (arrow, { item, section }) => {
  switch (arrow) {
    case UP:
      if (section === 0) {
        return [section, 0];
      } else {
        return [section - 1, 0];
      }
    case DOWN:
      if (section === 2) {
        return [section, 0];
      } else {
        return [section + 1, 0];
      }
    case LEFT:
      if (item === 0) {
        return [section, item];
      } else {
        return [section, item - 1];
      }
    case RIGHT:
      if (item === SECTION_LENGTHS[section]) {
        return [section, item];
      } else {
        return [section, item + 1];
      }
    default:
      break;
  }
};

const arrowPress = (arrow, prevFocus) => {
  let section, item;

  if (prevFocus.section === 1) {
    [section, item] = listFocus(arrow, prevFocus);
  } else {
    [section, item] = normalFocus(arrow, prevFocus);
  }
  console.log('navs:', { section, item });

  section < 2
    ? focusElement(ARROW_NAV_SECTIONS[ARROW_NAV_SECTION_TITLES[section]][item])
    : focusVideo();

  return {
    section,
    item,
  };
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
    case UP:
      return { ...state, currentFocus: arrowPress(UP, state.currentFocus) };
    case DOWN:
      return { ...state, currentFocus: arrowPress(DOWN, state.currentFocus) };
    case LEFT:
      return { ...state, currentFocus: arrowPress(LEFT, state.currentFocus) };
    case RIGHT:
      return { ...state, currentFocus: arrowPress(RIGHT, state.currentFocus) };
    default:
      return state;
  }
};

export default rootReducer;
