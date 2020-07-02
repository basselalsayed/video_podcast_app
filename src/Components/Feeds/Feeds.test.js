import React from 'React';
import { Feeds } from './';
import Feed from './Feed';

const pubDate = new Date().getDate();
const link = 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4';

const feeds = [
  { link, pubDate, title: 'test 1' },
  { link, pubDate, title: 'test 2' },
  { link, pubDate, title: 'test 3' },
  { link, pubDate, title: 'test 4' },
];

const defaultProps = { feeds };

describe('<Feeds />', () => {
  const wrapper = mount(<Feeds {...defaultProps} />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has 4 Feeds', () => {
    expect(wrapper.find(Feed).length).toEqual(4);
  });
});
