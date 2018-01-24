import React from 'react';
import { render, shallow } from 'enzyme';
import Comments from '../components/App';
import CreateNewComment from '../components/CreateNewComment';

test('renders the app', () => {
  render(<Comments />);
});

it('Check if a comment was created', () => {
  const fakeFunction = jest.fn();
  const form = shallow(<CreateNewComment postId='1' author='Hej' updateComments={fakeFunction} />);
  form.simulate('submit', {preventDefault () {}});
  expect(fakeFunction).toHaveBeenCalledTimes(1);
});
