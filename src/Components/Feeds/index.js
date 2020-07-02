import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ListGroup, Button } from 'react-bootstrap';
import Feed from './Feed';

const FeedsBase = ({
  currentFeeds,
  decVisibleFeeds,
  disabled,
  incVisibleFeeds,
}) => (
  <>
    <Button
      children='&#9650;'
      disabled={disabled}
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
      disabled={disabled}
      id='scroll-down'
      onClick={incVisibleFeeds}
    />
  </>
);

const mapStateToProps = state => ({
  currentFeeds: state.currentFeeds,
  disabled: state.disabled,
});

const mapDispatchToProps = dispatch => ({
  incVisibleFeeds: () => dispatch({ type: 'INC_VISIBLE_FEEDS' }),
  decVisibleFeeds: () => dispatch({ type: 'DEC_VISIBLE_FEEDS' }),
});

const Feeds = connect(mapStateToProps, mapDispatchToProps)(FeedsBase);

export { Feeds };

FeedsBase.propTypes = {
  currentFeeds: PropTypes.array.isRequired,
  decVisibleFeeds: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  incVisibleFeeds: PropTypes.func.isRequired,
};
