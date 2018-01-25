import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Comments from '../components/App';
import Bot from '../components/Bot/Bot';
import Message from '../components/Bot/Message';

it.skip('Bot should render messages', () => {
    const compontent = shallow(<Bot />);
    const fakeMessages = ["12", "34"];
    compontent.instance().renderMessages(fakeMessages);
    expect(compontent.find(Message).render());
});


it('bot onSubmit should set state messages', () => {
    const wrapper = shallow(<Bot />)
    const fakeMessage = {
        message: 'sdada',
        bot: false
    };
    wrapper.simulate('submit', { messages: fakeMessage });
    const fakeMessages = [...wrapper.state().messages, fakeMessage];
    wrapper.setState({ messages: fakeMessages});
    expect(wrapper.state().messages).toEqual(fakeMessages);
    expect(wrapper.instance().sendReply());
});

// it('Bot should send a reply', () => {
//     const wrapper = shallow(<Bot />);
//     expect(wrapper.instance().sendReply());
// })