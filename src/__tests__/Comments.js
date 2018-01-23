import React from 'react';
import { render } from 'enzyme';
import Comments from '../components/App';

test('renders the app', () => {
  render(<Comments />);
});
