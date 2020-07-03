const NUM_VISIBLE_FEEDS = 4;

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

const handleSectionChange = (type, state) => {
  let visibleFeeds = getVisibleFeeds(type, state);
  const currentFeeds = state.splitFeeds[visibleFeeds];
  let next = visibleFeeds === currentFeeds.length - 1;
  let prev = visibleFeeds === 0;
  const disabled = { next, prev };
  return {
    ...state,
    disabled,
    currentFeeds,
    visibleFeeds,
  };
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

export { handleSectionChange, parseVideoContent, splitFeed };
