import React from 'react';
import { render } from 'enzyme';
import Button from '../components/App';

test('renders the app', () => {
  render(<Button />);
});
