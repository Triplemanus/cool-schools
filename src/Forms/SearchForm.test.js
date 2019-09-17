import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import { fetchAllSchools } from '../apiCalls/apiCalls';
import { searchSchools, isLoading, hasErrored } from '../actions';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchForm', () => {
  let wrapper, mockLocState, mockLevel, mockLatLocation, mockLongLocation, mockMaxDistance;

  beforeEach(() => {
    mockLocState = '';
    mockLevel =  '';
    mockLatLocation = '';
    mockLongLocation = '';
    mockMaxDistance = '';
    wrapper = shallow(<SearchForm 
      locState={mockLocState}
      level={mockLevel}
      latLocation={mockLatLocation}
      longLocation={mockLongLocation}
      maxDistance={mockMaxDistance}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });
});