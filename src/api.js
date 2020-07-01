import axios from 'axios';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const CNN_RSS = 'http://rss.cnn.com/services/podcasting/studentnews/rss/';

const getRss = async () => {
  try {
    const response = await axios.get(CORS_PROXY + CNN_RSS);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getRss;
