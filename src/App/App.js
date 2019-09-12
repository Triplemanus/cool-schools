import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllSchools } from '../apiCalls/apiCalls';
import { getAllSchools, isLoading, hasFailed } from '../actions';

import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    const { getAllSchools, isLoading, hasFailed} = this.props;
    try {
      const schools = await fetchAllSchools();
      console.log('schools is: ', schools);
      getAllSchools(schools);
      isLoading(false);
    } catch ( {message} ){ 
      isLoading(false);
      hasFailed(message)
    }
  }

  render () {
    return (
      <div className="App">
        
        <main>
          <h1>Schoolhouses Rock!</h1>
        </main>

      </div>

    )
  }
}

export const mapStateToProps = state => ({
...state
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    isLoading,
    hasFailed,
    getAllSchools
  }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(App);
