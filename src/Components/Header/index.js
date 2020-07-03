import React from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar } from 'react-bootstrap';

const Header = ({ link, title, rssHandler }) => (
  <>
    <Navbar>
      <Navbar.Brand>
        <a href={link}>{title}</a>
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
