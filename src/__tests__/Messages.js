import React from 'react';
import { render, shallow, mount } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';
import Message from '../components/Bot/Message';

it('Test if a message was submitted', () => {
    const fakeFunction = jest.fn();
    const form = mount(<MessageForm onSubmit={fakeFunction} />);
    form.simulate('submit', {preventDefault () {}});
    expect(fakeFunction).toHaveBeenCalledTimes(1);
}); 

it('tests that onChange sets input to state', () => {
    const fakeFunction = jest.fn();
    const form = mount(<MessageForm onSubmit={fakeFunction} />);
    const message = {target: {name: 'userMessage', value: 'hejhej' }}
    form.find('input[name="userMessage"]').simulate('change', message);
    expect(form.state().userMessage).toEqual('hejhej');
}); 

it('If message has prop bot, class should be bg-white', () => {
    const wrapper = mount(<Message bot={true} message='hej'/>);
    expect(wrapper.find('p').hasClass('bg-white')).toEqual(true);
});

it('If message doesnt have prop bot, class should be bg-indigo-dark', () => {
    const wrapper = mount(<Message bot={false} message='hej'/>);
    expect(wrapper.find('p').hasClass('bg-indigo-dark')).toEqual(true);
});

