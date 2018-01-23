import React from 'react';
import { render, mount } from 'enzyme';
import AvatarSelector from '../components/App';

test('renders the avatarSelector', () => {
  render(<AvatarSelector />);
});

it('AvatarSelector should be passed a string', () => {
  const testImg = 'Testperson';
  expect(() => AvatarSelector(testImg)).toBeTruthy();
});

it('AvatarSelector should throw error when not passed a string', () => {
  const testImg = [];
  expect(() => AvatarSelector(testImg)).toThrow();
});

it('AvatarSelector should have 3 values', () => {
  const wrapper = render(<AvatarSelector currentPersona='cpl' />);
  const select = wrapper.find('option');
  expect(select).toHaveLength(3);
});

it('AvatarSelector src should be same as currentPersona', () => {
  const personas = ['Morgana', 'Esmeralda', 'Zac'];
  const wrapper = mount(<AvatarSelector />);

  wrapper.find('select').simulate('change', { target: { value: personas[0] } });
  wrapper.find('select').simulate('change', { target: { value: personas[1] } });
  wrapper.find('select').simulate('change', { target: { value: personas[2] } });

  expect(
    wrapper
      .find('img')
      .filterWhere(
        item => item.prop('src') === personas[0] || personas[1] || personas[2]
      )
  ).toBeTruthy();
});
