import React from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar } from 'react-bootstrap';

const Header = ({ link, title, rssHandler }) => (
  <Navbar>
    <a id='brand-link' tabIndex={0} href={link}>
      <Navbar.Brand>{title}</Navbar.Brand>
    </a>
    <Navbar.Toggle />
    <Navbar.Collapse className='justify-content-end'>
      <Button id='refresh-rss' onClick={rssHandler} children={'Update Feed'} />
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  rssHandler: PropTypes.func.isRequired,
};

export { Header };
