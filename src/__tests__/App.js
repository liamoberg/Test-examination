import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

it('if page is changed to home, currentPage should be bot ', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().changePage();
  wrapper.setState({ currentPage: 'bot' });
  expect(wrapper.state().currentPage).toEqual('bot');
});

it('else it should just be home', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ currentPage: 'bot' });
  wrapper.instance().changePage();
  wrapper.setState({ currentPage: 'home' });
  expect(wrapper.state().currentPage).toEqual('home');
});