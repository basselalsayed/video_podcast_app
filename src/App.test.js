import App from './App';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
