import React from 'react';
import { render, shallow, mount} from 'enzyme';
import Posts from '../components/App';
import CreateNewPost from '../components/CreateNewPost';

test('renders the app', () => {
  render(<Posts />);
});

it('create post', () => {
  const fakeFunction = jest.fn();
  const form = shallow (<CreateNewPost author='hej' updatePosts={fakeFunction} />)
  form.simulate('submit', {preventDefault () {}});
  expect(fakeFunction).toHaveBeenCalledTimes(1);
});