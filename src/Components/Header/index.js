import React from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar } from 'react-bootstrap';

const Header = ({ description, title, rssHandler }) => (
  <>
    <Navbar>
      <Navbar.Brand>
        <p>{title}</p>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Button id='refresh-rss' onClick={rssHandler}>
          Update Feed
        </Button>
      </Navbar.Collapse>
    </Navbar>
    <h3>{description}</h3>
  </>
);

Header.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rssHandler: PropTypes.func.isRequired,
};

export { Header };
