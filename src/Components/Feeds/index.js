import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';
import Feed from './Feed';

const Feeds = ({ feeds }) => (
  <ListGroup>
    {feeds &&
      feeds.map((feed, idx) => <Feed key={idx} idx={idx} feed={feed} />)}
  </ListGroup>
);

Feeds.propTypes = {
  feeds: PropTypes.array.isRequired,
};

export { Feeds };
