import React from 'react';
import { render, shallow, mount} from 'enzyme';
import Posts from '../components/App';
import CreateNewPost from '../components/CreateNewPost';

test('renders the app', () => {
  render(<Posts />);
});

it('Form submit button runs one function', () => {
  const fakeFunction = jest.fn();
  const form = shallow (<CreateNewPost author='hej' updatePosts={fakeFunction} />)
  form.simulate('submit', {preventDefault () {}});
  expect(fakeFunction).toHaveBeenCalledTimes(1);
});

it.skip('Test if onChange sets value and name to state', () => {
  const fakeFunction = jest.fn();
  const form = shallow(<CreateNewPost author='hej' updatePosts={fakeFunction} value='' onChange={fakeFunction} />);
  form.find('input').at(1).simulate('change');
  expect(fakeFunction).toBeCalledWith('');

});