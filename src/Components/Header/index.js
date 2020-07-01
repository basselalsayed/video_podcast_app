import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

const Header = ({ title }) => {
  return (
    <Navbar>
      <Navbar.Brand>{title || 'Welcome'}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>Example</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Header };
