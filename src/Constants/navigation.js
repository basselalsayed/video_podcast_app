const ARROW_NAV_SECTION_TITLES = ['header', 'scroll', 'video'];
const ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
const [header, scroll, video] = ARROW_NAV_SECTION_TITLES;

const ARROW_NAV_SECTIONS = {
  [header]: ['brand-link', 'refresh-rss'],
  [scroll]: [
    'scroll-prev',
    'thumb-0',
    'thumb-1',
    'thumb-2',
    'thumb-3',
    'scroll-next',
  ],
  [video]: ['main-vid'],
};
const SECTION_LENGTHS = [1, 5, 0];

export {
  ARROW_KEYS,
  ARROW_NAV_SECTIONS,
  ARROW_NAV_SECTION_TITLES,
  SECTION_LENGTHS,
};
