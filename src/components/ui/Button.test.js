import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
	const mockCallBack = jest.fn();
	const wrapper = shallow(<Button text="Iniciar" type="btn-default"  onClick={mockCallBack} />);
	it('Render Text', () => {
		expect(wrapper.text()).toBe('Iniciar');
	});
	it('Render Class', () => {
		expect(wrapper.hasClass('btn-default')).toEqual(true);
	});
	it('Test click event', () => {
		wrapper.simulate('click');
		expect(mockCallBack.mock.calls.length).toEqual(1);
	});
})



