import { ENDPOINT } from '../Constants';

let Parser = require('rss-parser');
let parser = new Parser();

const getRss = async () => {
  try {
    let feed = await parser.parseURL(ENDPOINT);

    return feed;
  } catch (error) {
    alert('Please try again later.');
    console.log(error);
  }
};

export { getRss };
