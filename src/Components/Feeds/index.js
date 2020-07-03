import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ListGroup, Button } from 'react-bootstrap';
import Feed from './Feed';

import { column } from './Feeds.module.css';

const FeedsBase = ({
  currentFeeds,
  prevFeedListSection,
  canScroll,
  nextFeedListSection,
}) => (
  <div className={column}>
    <Button
      children='&#9650;'
      disabled={!canScroll.prev}
      id='scroll-prev'
      onClick={prevFeedListSection}
    />
    <ListGroup>
      {currentFeeds &&
        currentFeeds.map((feed, idx) => (
          <Feed key={idx} idx={idx} feed={feed} />
        ))}
    </ListGroup>
    <Button
      children='&#9660;'
      disabled={!canScroll.next}
      id='scroll-next'
      onClick={nextFeedListSection}
    />
  </div>
);

const mapStateToProps = state => ({
  currentFeeds: state.currentFeeds,
  canScroll: state.canScroll,
});

const mapDispatchToProps = dispatch => ({
  nextFeedListSection: () => dispatch({ type: 'NEXT_FEED_LIST_SECTION' }),
  prevFeedListSection: () => dispatch({ type: 'PREV_FEEDS_LIST_SECTION' }),
});

const Feeds = connect(mapStateToProps, mapDispatchToProps)(FeedsBase);

export { Feeds };

FeedsBase.propTypes = {
  currentFeeds: PropTypes.array.isRequired,
  prevFeedListSection: PropTypes.func.isRequired,
  canScroll: PropTypes.object.isRequired,
  nextFeedListSection: PropTypes.func.isRequired,
};
