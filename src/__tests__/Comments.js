import React from 'react';
import { shallow, mount } from 'enzyme';
import Comments from '../components/Comments';
import SingleComment from '../components/SingleComment';
import CreateNewComment from '../components/CreateNewComment';

it('Check if a comment was created', () => {
  const fakeFunction = jest.fn();
  const form = shallow(<CreateNewComment postId='1' author='Hej' updateComments={fakeFunction} />);
  form.simulate('submit', {preventDefault () {}});
  expect(fakeFunction).toHaveBeenCalledTimes(1);
});

it('Component should render commentlist', () => {
    const wrapper = shallow(<Comments postId='1' currentPersona="zac" author="dsa" />);
    expect(wrapper.find(CreateNewComment).render());
});

it('renderCommentList should render <SingleComment(s) />', () => {
    const fakeFunction = jest.fn();
    const fakeComments = [{id: '1', author:'bu', onClick: fakeFunction, currentPersona: 'zac', comment: 'cpl', date:'sdsad'}];
    const wrapper = shallow(<Comments postId='1' currentPersona="zac" author="dsa" />);
    wrapper.instance().renderCommentList(fakeComments)
    expect(wrapper.find(<SingleComment {...fakeComments[0]} />));
});

it('removeComment should call removeComment from API', () => {
    const wrapper = shallow(<Comments postId='1' currentPersona="zac" author="dsa" />);
    wrapper.instance().removeComment('1');
    expect(wrapper.instance().removeComment);
});

it('checks if onChange on a new comment sets values to state', () => {
    const fakeFunction = jest.fn();
    const wrapper = mount(<CreateNewComment postId='1' author='hej' updateComments={fakeFunction} />);
    const message = {target: {name: 'comment', value:'kommentar'}};
    wrapper.find('textarea[name="comment"]').simulate('change', message);
    expect(wrapper.state().comment).toEqual('kommentar');
});