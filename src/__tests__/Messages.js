import React from 'react';
import { render, shallow, mount } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';

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