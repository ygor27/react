import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
	const wrapper = shallow(<Input label="CNPJ/Empresa" name="cnpj"  value="teste" />);
	it('Render input', () => {
		expect(wrapper.find("input").length).toEqual(1)
	});
	it('Render Label', () => {
	  expect(wrapper.find('.input-wrapper-label').text()).toBe('CNPJ/Empresa');
	});	
})
