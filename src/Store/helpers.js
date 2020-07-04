import {
  ARROW_KEYS,
  ARROW_NAV_SECTION_TITLES,
  ARROW_NAV_SECTIONS,
  NUM_OF_SECTIONS,
  NUM_VISIBLE_FEEDS,
  SECTION_LENGTHS,
} from '../Constants';

const [UP, DOWN, LEFT, RIGHT] = ARROW_KEYS;

const getVisibleFeeds = (type, state) => {
  return type === 'next'
    ? state.visibleFeeds === state.splitFeeds.length - 1
      ? state.visibleFeeds
      : state.visibleFeeds + 1
    : state.visibleFeeds === 0
    ? state.visibleFeeds
    : state.visibleFeeds - 1;
};

const parseVideoContent = content => {
  let period = content.indexOf('<');
  let [parsedDescription, parsedHtml] = [
    content.substring(0, period),
    content.substring(period),
  ];
  return { parsedDescription, parsedHtml };
};

const splitFeed = feed =>
  new Array(Math.ceil(feed.length / NUM_VISIBLE_FEEDS))
    .fill()
    .map(_ => feed.splice(0, NUM_VISIBLE_FEEDS));

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

// in the thumbnail list up and down should navigate items not sections
// navlogic split in two functions for legibility
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
      return section === NUM_OF_SECTIONS ? [section, 0] : [section + 1, 0];
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

  prevFocus.section === 1
    ? ([section, item] = thumbnailFocus(arrow, prevFocus))
    : ([section, item] = normalFocus(arrow, prevFocus));

  if (section < 2)
    focusElement(ARROW_NAV_SECTIONS[ARROW_NAV_SECTION_TITLES[section]][item]);
  if (section === 2) focusVideo();
  if (section === 3) focusVidFooter(item);

  return {
    section,
    item,
  };
};

export { arrowPress, getVisibleFeeds, parseVideoContent, splitFeed };
