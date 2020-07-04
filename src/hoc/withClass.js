// i kept this in for demonstrative purposes

import React from 'react';

const withClass = (Component, className) => props => (
  <div className={className}>
    <Component {...props} />
  </div>
);

export { withClass };
