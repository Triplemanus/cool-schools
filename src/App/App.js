import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
// import PropTypes from 'prop-Types';
import SearchForm from '../Forms/SearchForm';
import SchoolCardContainer from '../Containers/SchoolCardContainer';
import { getAllSchools, isLoading, hasErrored } from '../actions';

import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    const { getAllSchools, isLoading, hasErrored} = this.props;
    try {
      // const schools = await fetchAllSchools();
      // console.log('schools is: ', schools);
      // getAllSchools(schools);
      isLoading(false);
    } catch ( {message} ){ 
      isLoading(false);
      hasErrored(message)
    }
  }

  render () {
    return (
      <div className="App">
          <Link to={"/"} className="header-link">
            <div className="headerContents">
            <h1>Schoolhouses Rock!</h1>
            </div>
          </Link>
          <Route exact path="/" render={() => <SearchForm />} />
          <Route
          exact
          path="/"
          render={() => <SchoolCardContainer displayType={"albums"} />}
        />
      </div>
    )
  }
};

export const mapStateToProps = state => ({
...state
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    isLoading,
    hasErrored,
    getAllSchools
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
