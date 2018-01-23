import React from 'react';
import { render } from 'enzyme';
import Posts from '../components/App';

test('renders the app', () => {
  render(<Posts />);
});
