import React from 'React';
import { Header } from './';

const rssHandler = jest.fn(() => {});

const defaultProps = {
  link: 'www.test.com',
  title: 'Test Title',
  rssHandler,
};

describe('<Header />', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has correct inner text and link', () => {
    expect(wrapper.text()).toEqual('Test TitleUpdate Feed');
    expect(wrapper.html()).toEqual(
      '<nav class="navbar navbar-expand navbar-light"><a id="brand-link" tabindex="0" href="www.test.com"><span class="navbar-brand">Test Title</span></a><button type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button><div class="justify-content-end navbar-collapse collapse"><button id="refresh-rss" type="button" class="btn btn-primary">Update Feed</button></div></nav>',
    );
  });

  it('calls the reset spy onClick', () => {
    wrapper.find('#refresh-rss').simulate('click');
    expect(rssHandler.mock.calls.length).toEqual(1);
  });
});
