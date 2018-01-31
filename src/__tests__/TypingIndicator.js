import React from 'react';
import { render, shallow, mount } from 'enzyme';
import TypingIndicator from '../components/Bot/TypingIndicator';

it('Check if typing is true then it returns a typingindicator div', () => {
    const wrapper = mount(<TypingIndicator typing={true} />);
    expect(wrapper.find('.TypingIndicator')).toHaveLength(1);
});

it('Check if typing is false then it returns nothing', () => {
    const wrapper = shallow(<TypingIndicator typing={false} />);
    expect(wrapper.find('.TypingIndicator')).toHaveLength(0);
});