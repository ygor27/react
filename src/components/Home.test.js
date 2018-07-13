import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from "./ui/Button";
import Home from './Home';


describe('Home', () => {
	const wrapper = shallow(<Home />);
	it('Render button', () => {
		expect(wrapper.find(Button).length).toEqual(1)
	})	
	it('Render Info', () => {
		expect(wrapper.find('.home-instructions').length).toEqual(1)
	})		
})
