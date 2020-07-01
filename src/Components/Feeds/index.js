import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';
import { Feed } from '../';

const Feeds = ({ feeds }) => {
  const feedMap =
    feeds && feeds.map((feed, idx) => <Feed key={idx} feed={feed} />);

  return <ListGroup>{feedMap}</ListGroup>;
};

Feeds.propTypes = {
  feeds: PropTypes.array.isRequired,
};

export { Feeds };
