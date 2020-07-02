// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { Provider } from 'react-redux';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, render, mount } from 'enzyme';

import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

global.React = React;
global.Provider = Provider;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.configureStore = configureStore;
