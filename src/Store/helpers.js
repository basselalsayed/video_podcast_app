import { NUM_VISIBLE_FEEDS } from '../Constants/numVisibleFields';

const getVisibleFeeds = (type, state) => {
  if (type === 'next')
    return state.visibleFeeds === state.splitFeeds.length - 1
      ? state.visibleFeeds
      : state.visibleFeeds + 1;
  else
    return state.visibleFeeds === 0
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

export { getVisibleFeeds, parseVideoContent, splitFeed };
