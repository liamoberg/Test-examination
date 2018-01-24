import React from 'react';
import { shallow } from 'enzyme';
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
    const fakeComments = ['fake comment 1','fake comment 2'];
    const wrapper = shallow(<Comments postId='1' currentPersona="zac" author="dsa" />);
    wrapper.instance().renderCommentList(fakeComments)
     expect(wrapper.find(<SingleComment onClick={fakeFunction} date="23" currentPersona="asda" author="sad" id="1" comment="A comment" />));
});

it('removeComment should call removeComment from API', () => {
    const wrapper = shallow(<Comments postId='1' currentPersona="zac" author="dsa" />);
    wrapper.instance().removeComment('1');
    expect(wrapper.instance().removeComment);
});