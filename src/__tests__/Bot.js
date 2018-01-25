import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Comments from '../components/App';
import Bot from '../components/Bot/Bot';

it('Tests if the bot renders messages', () => {
    const compontent = mount(<Bot />);

});