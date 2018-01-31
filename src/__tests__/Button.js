import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Button from '../components/Button';

it('when button has prop danger it should have class bg-dark-red', () => {
  const fakeFunction = jest.fn();
  const wrapper = shallow(<Button onClick={fakeFunction} danger>dsd</Button>);
  expect(wrapper.find('[data-test="button"]').hasClass('bg-red-dark')).toEqual(true);
 });

 it('when button doesnt have prop danger it should have class bg-indigo-dark', () => {
  const fakeFunction = jest.fn();
  const wrapper = mount(<Button onClick={fakeFunction}>dsd</Button>);
  expect(wrapper.find('[data-test="button"]').hasClass('bg-indigo-dark')).toEqual(true);
 });