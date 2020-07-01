import React from 'React';
import { Feed, Feeds } from '../';

const feeds = [...Array(4).keys()];
const defaultProps = { feeds };

describe('<Feeds />', () => {
  const wrapper = shallow(<Feeds {...defaultProps} />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has 4 Feeds', () => {
    expect(wrapper.find(Feed).length).toEqual(4);
  });
});
