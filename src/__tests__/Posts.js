import React from 'react';
import { render, shallow, mount} from 'enzyme';
import Posts from '../components/Posts';
import CreateNewPost from '../components/CreateNewPost';
import SinglePost from '../components/SinglePost';

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

it('Removepost should setPostFromLocalStorage', () => {
 const wrapper = shallow(<Posts currentPersona="zac" author="cpl" />);
 wrapper.instance().removePost();
 expect(wrapper.instance().setPostFromLocalStorage());
})

it('renderPostList should render <SinglePost(s) />', () => {
  const fakeFunction = jest.fn();
  const fakePosts = [{id: '1', author:'bu', onClick: fakeFunction, title: 'title', currentPersona: 'zac', content: 'cpl', date:'sdsad'}];
  const wrapper = shallow(<Posts postId='1' currentPersona="zac" author="dsa" />);
  wrapper.instance().renderPostList(fakePosts)
  expect(wrapper.find(<SinglePost {...fakePosts[0]} />));
});
