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
  let element = document.querySelector(`#${elementId}`);
  element && element.focus();
};

const focusVideo = () =>
  document
    .querySelectorAll('div#main-vid > video')
    .forEach(el => el && el.focus());

const focusVidFooter = i => {
  let el = document.querySelectorAll('.feedflare > a')[i];
  el && el.focus();
};

const thumbnailFocus = (arrow, { item, section }) => {
  switch (arrow) {
    case UP:
      return item === 0 ? [section - 1, item] : [section, item - 1];
    case DOWN:
      return item === SECTION_LENGTHS[section]
        ? [section, item]
        : [section, item + 1];
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
      return section === 0 ? [section, 0] : [section - 1, 0];
    case DOWN:
      return section === 3 ? [section, 0] : [section + 1, 0];
    case LEFT:
      return section >= 2 && item === 0
        ? [1, 1]
        : item === 0
        ? [section, item]
        : [section, item - 1];
    case RIGHT:
      return item === SECTION_LENGTHS[section]
        ? [section, item]
        : [section, item + 1];
    default:
      break;
  }
};

const arrowPress = (arrow, prevFocus) => {
  let section, item;

  if (prevFocus.section === 1) {
    [section, item] = thumbnailFocus(arrow, prevFocus);
  } else {
    [section, item] = normalFocus(arrow, prevFocus);
  }

  if (section < 2)
    focusElement(ARROW_NAV_SECTIONS[ARROW_NAV_SECTION_TITLES[section]][item]);
  if (section === 2) focusVideo();
  if (section === 3) focusVidFooter(item);

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
