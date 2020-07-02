let Parser = require('rss-parser');
let parser = new Parser();

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const CNN_RSS = 'http://rss.cnn.com/services/podcasting/studentnews/rss/';
const FULL_URL = CORS_PROXY + CNN_RSS;

const getRss = async () => {
  try {
    let feed = await parser.parseURL(FULL_URL);

    return feed;
  } catch (error) {
    alert('Please try again later.');
    console.log(error);
  }
};
export { getRss };
