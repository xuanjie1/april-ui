/*
 * @Description: 
 * @Author: April
 * @Date: 2024-05-28 15:05:58
 * @LastEditors: April
 * @LastEditTime: 2024-05-30 10:51:56
 */
import '@testing-library/jest-dom';
import React from 'react';
import Foo from './index';

import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Button from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Button订单组件', () => {
  it('render text by order type', () => {
    const wrapper = shallow(<Button orderType={1}></Button>);
    expect(wrapper.text()).toEqual('已完成');
  });

  it('onclick disabled', () => {
    const onclick = jest.fn();
    const wrapper = shallow(<Button onClick={onclick} disabled></Button>);
    wrapper.simulate('click');
    expect(onclick).not.toBeCalled();
  });
});
