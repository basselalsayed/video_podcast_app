const NUM_VISIBLE_FEEDS = 4;

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

export { parseVideoContent, splitFeed };
