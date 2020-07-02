// Changed filetype as both xdescribe and describe.skip not ignoring tests

import App from './App';

describe.skip('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
