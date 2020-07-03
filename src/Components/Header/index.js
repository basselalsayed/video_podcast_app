import React from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar } from 'react-bootstrap';

const Header = ({ title, rssHandler }) => (
  <>
    <Navbar>
      <Navbar.Brand>
        <p>{title}</p>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Button
          id='refresh-rss'
          onClick={rssHandler}
          children={'Update Feed'}
        />
      </Navbar.Collapse>
    </Navbar>
  </>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  rssHandler: PropTypes.func.isRequired,
};

export { Header };
