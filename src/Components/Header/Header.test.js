import React from 'React';
import { Header } from './';

const rssHandler = jest.fn(() => {});

const defaultProps = {
  description: 'A test description',
  title: 'Test Title',
  rssHandler,
};

describe('<Header />', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has correct inner text', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <p>{defaultProps.title}</p>,
        <h3>{defaultProps.description}</h3>,
      ]),
    ).toEqual(true);
  });

  it('calls the reset spy onClick', () => {
    wrapper.find('#refresh-rss').simulate('click');
    expect(rssHandler.mock.calls.length).toEqual(1);
  });
});
