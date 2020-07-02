import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ListGroup, Button } from 'react-bootstrap';
import Feed from './Feed';

const FeedsBase = ({
  currentFeeds,
  decVisibleFeeds,
  incVisibleFeeds,
  visibleFeeds,
}) => (
  <>
    <Button
      children='&#9650;'
      disabled={visibleFeeds === 0}
      id='scroll-up'
      onClick={decVisibleFeeds}
    />
    <ListGroup>
      {currentFeeds &&
        currentFeeds.map((feed, idx) => (
          <Feed key={idx} idx={idx} feed={feed} />
        ))}
    </ListGroup>
    <Button
      children='&#9660;'
      disabled={currentFeeds.length < 4}
      id='scroll-down'
      onClick={incVisibleFeeds}
    />
  </>
);

const mapStateToProps = state => ({
  currentFeeds: state.currentFeeds,
  visibleFeeds: state.visibleFeeds,
});

const mapDispatchToProps = dispatch => ({
  incVisibleFeeds: () => dispatch({ type: 'INC_VISIBLE_FEEDS' }),
  decVisibleFeeds: () => dispatch({ type: 'DEC_VISIBLE_FEEDS' }),
});

const Feeds = connect(mapStateToProps, mapDispatchToProps)(FeedsBase);

export { Feeds };

FeedsBase.propTypes = {
  currentFeeds: PropTypes.array.isRequired,
  incVisibleFeeds: PropTypes.func.isRequired,
  decVisibleFeeds: PropTypes.func.isRequired,
  visibleFeeds: PropTypes.number.isRequired,
};
