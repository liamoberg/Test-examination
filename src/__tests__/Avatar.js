import React from 'react';
import { render } from 'enzyme';
import AvatarSelector from '../components/App';

test('renders the avatarSelector', () => {
  render(<AvatarSelector />);
});

it('Avatarselector should be passed a string', () => {
    const testImg = 'Testperson';
    expect(() => AvatarSelector(testImg)).toBeTruthy();
  });

  it('Avatarselector should throw error when not passed a string', () => {
    const testImg = [];
    expect(() => AvatarSelector(testImg)).toThrow();
  });
