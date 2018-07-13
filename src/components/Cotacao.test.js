import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from "./ui/Button";
import Input from "./ui/Input";
import Cotacao from './Cotacao';


describe('Cotacao', () => {
	const wrapper = shallow(<Cotacao />);
	it('Render input', () => {
	  expect(wrapper.find(Input).length).toEqual(1)
	})
	it('Render button', () => {
	  expect(wrapper.find(Button).length).toEqual(1)
	})	
	it('Change cnpj', () => {
		wrapper.find(Input).simulate('change', {target: {name: 'cnpj', value: '58.184.212/0001-56'}});
		expect(wrapper.state('cnpj')).toEqual('58.184.212/0001-56');
	})
})
