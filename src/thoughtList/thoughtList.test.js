import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe.skip('ThoughtList', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ThoughtList />)
  })

  it('has a thoughtList class field', () => {
    expect(wrapper).toBeDefined();
  });

  it('has multiple ThoughtCard class fields', () => {
  });

});
