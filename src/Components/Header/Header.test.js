import React from 'React';
import { Header } from './';

const defaultProps = { description: 'A test description', title: 'Test Title' };

describe('<Header />', () => {
  const wrapper = shallow(<Header {...defaultProps} />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has correct inner text', () => {
    expect(
      wrapper.containsMatchingElement(<p>{defaultProps.title}</p>),
    ).toEqual(true);
    expect(
      wrapper.containsMatchingElement(<h3>{defaultProps.description}</h3>),
    ).toEqual(true);
  });
});
