import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe.only('ThoughtList', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ThoughtList />)
  })

  it('has a thoughtList class field', () => {
    // renderedThoughtList
    expect(wrapper).toBeDefined();
  });

  it('has multiple ThoughtCard class fields', () => {
  });

});
