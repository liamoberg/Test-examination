import React from 'react';
import { render, shallow, mount} from 'enzyme';
import Posts from '../components/App';
import CreateNewPost from '../components/CreateNewPost';

test('renders the app', () => {
  render(<Posts />);
});

it('Form submit button runs a function', () => {
  const fakeFunction = jest.fn();
  const form = shallow (<CreateNewPost author='hej' updatePosts={fakeFunction} />)
  form.simulate('submit', {preventDefault () {}});
  expect(fakeFunction).toHaveBeenCalledTimes(1);
});

it('Test if onChange sets title to state', () => {
  const fakeFunction = jest.fn();
  const form = mount(<CreateNewPost author='hej' updatePosts={fakeFunction} onChange={fakeFunction} />);
  const title = {target : {name: 'title', value: 'asdasdasd'}};
  form.find('input[name="title"]').simulate('change', title);
  expect(form.state().title).toEqual('asdasdasd');
})

it('Test if onChange sets content to state', () => {
  const fakeFunction = jest.fn();
  const form = mount(<CreateNewPost author='hej' updatePosts={fakeFunction} onChange={fakeFunction} />);
  const content = {target : {name: 'content', value: 'sadasdasd'}};
  form.find('textarea[name="content"]').simulate('change', content);
  expect(form.state().content).toEqual('sadasdasd');
})