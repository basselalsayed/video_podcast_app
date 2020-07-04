import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Button, ListGroup } from 'react-bootstrap';
import Feed from './Feed';

import classes, { column } from './Feeds.module.css';

const FeedsBase = ({
  currentFeeds,
  feed,
  prevFeedListSection,
  // disabled,
  nextFeedListSection,
}) => (
  <div className={column}>
    <Card>
      <Card.Body className={classes.Card}>{feed.description}</Card.Body>
    </Card>
    <Button
      children='&#9650;'
      // disabled has been commented out as I think it is better ui to allow the buttons to be focused
      // redux validation prevents a click from going out of bounds so its safe
      // I left it in to show the work done
      // disabled={disabled.prev}
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
      // disabled={disabled.next}
      id='scroll-next'
      onClick={nextFeedListSection}
    />
  </div>
);

const mapStateToProps = state => ({
  currentFeeds: state.currentFeeds,
  feed: state.feed,
  disabled: state.disabled,
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
  disabled: PropTypes.object.isRequired,
  nextFeedListSection: PropTypes.func.isRequired,
};
