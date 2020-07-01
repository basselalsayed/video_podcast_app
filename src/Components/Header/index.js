import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

const Header = ({ description, title }) => {
  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <p>{title}</p>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>Example</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <h3>{description}</h3>
    </>
  );
};

Header.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { Header };
