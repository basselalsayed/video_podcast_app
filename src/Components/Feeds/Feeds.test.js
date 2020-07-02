import { Feeds } from './';
import Feed from './Feed';

const mockStore = configureStore([]);

const pubDate = new Date().getDate();
const link = 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4';

const currentFeeds = [
  { link, pubDate, title: 'test 1' },
  { link, pubDate, title: 'test 2' },
  { link, pubDate, title: 'test 3' },
  { link, pubDate, title: 'test 4' },
];

const defaultProps = {
  currentFeeds,
  decVisibleFeeds: jest.fn(() => {}),
  disabled: false,
  incVisibleFeeds: jest.fn(() => {}),
};

describe('<Feeds />', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore({
      ...defaultProps,
    });

    store.dispatch = jest.fn();

    wrapper = mount(
      <Provider store={store}>
        <Feeds />
      </Provider>,
    );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has 4 Feeds', () => {
    expect(wrapper.find(Feed).length).toEqual(4);
  });

  it('calls a redux dispatch on scroll click', () => {
    wrapper.find('#scroll-down').at(0).simulate('click');
    wrapper.find('#scroll-up').at(0).simulate('click');
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
