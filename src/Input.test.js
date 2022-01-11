import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

const defaultProps = {
    secretWord: ""
};

/**
 * Setup function for app component
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props}
  return shallow(<Input {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

test('does noo throw warning with expected props', () => {
    const expectedProps = { secretWord: ""};
    checkProps(Input, expectedProps);
});
