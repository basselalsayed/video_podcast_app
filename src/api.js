import axios from 'axios';
let Parser = require('rss-parser');
let parser = new Parser();

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const CNN_RSS = 'http://rss.cnn.com/services/podcasting/studentnews/rss/';
const FULL_URL = CORS_PROXY + CNN_RSS;

const getRss = async () => {
  try {
    const response = await axios.get(CORS_PROXY + CNN_RSS);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const newRss = async () => {
  try {
    let feed = await parser.parseURL(FULL_URL);

    return feed;
  } catch (error) {
    console.log(error);
  }
};
export { getRss, newRss };
