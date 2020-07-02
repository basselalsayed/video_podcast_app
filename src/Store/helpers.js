const parseVideoContent = content => {
  let period = content.indexOf('<');
  let [parsedDescription, parsedHtml] = [
    content.substring(0, period),
    content.substring(period),
  ];
  return { parsedDescription, parsedHtml };
};

export default parseVideoContent;
