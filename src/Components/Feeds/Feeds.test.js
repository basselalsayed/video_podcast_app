import { Feeds } from './';
import Feed from './Feed';

// react has issue with muted video in dom
// works ok though so this removes error logging
// https://github.com/facebook/react/issues/10389

const renderIgnoringUnstableFlushDiscreteUpdates = component => {
  /* eslint-disable no-console */
  const originalError = console.error;
  const error = jest.fn();
  console.error = error;
  const result = mount(component);
  expect(error).toHaveBeenCalled();
  expect(error).toHaveBeenCalledWith(
    'Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.%s',
    expect.any(String),
  );
  console.error = originalError;
  /* eslint-enable no-console */
  return result;
};

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
  prevFeedListSection: jest.fn(() => {}),
  canScroll: { next: true, prev: false },
  nextFeedListSection: jest.fn(() => {}),
};

describe('<Feeds />', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore({
      ...defaultProps,
    });

    store.dispatch = jest.fn();

    wrapper = renderIgnoringUnstableFlushDiscreteUpdates(
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
    wrapper.find('#scroll-next').at(0).simulate('click');
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
