import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', ( ) => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App
      isLoading={mockIsLoading}
      hasErrored={mockHasErrored}
      />)
  })
  const mockSearchSchools = jest.fn();
  const mockIsLoading = jest.fn();
  const mockHasErrored = jest.fn();

  it('should call getAllSchools and isLoading after mounting ', () => {
    expect(mockIsLoading).toHaveBeenCalled();
    expect(mockSearchSchools).toHaveBeenCalled();
  })
})
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Provider />, <App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

