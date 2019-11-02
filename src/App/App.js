import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import SearchForm from '../Forms/SearchForm';
import SchoolCardContainer from '../Containers/SchoolCardContainer';
import { getAllSchools, isLoading, hasErrored } from '../actions';
import { fetchAllSchools } from '../apiCalls/apiCalls';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    const { getAllSchools, isLoading, hasErrored} = this.props;
    try {
      const schools = await fetchAllSchools();
      console.log('fetched schools is: ', schools);
      getAllSchools(schools);
      isLoading(false);
    } catch ( {message} ){ 
      isLoading(false);
      hasErrored(message)
    }
  }

  // {this.state.schools && <Route exact path="/schools" render={() => <SchoolCardContainer  />}/>}
  render () {
    return (
      <div className="App">
          <Link to={"/"} className="header-link">
            <div className="headerContents">
            <h1>Schoolhouses Rock!</h1>
            </div>
          </Link>
          <Route  path="/" render={() => <SearchForm />} />
          <Link to={"/schools"}>
            <section>
              <p>All Schools</p>
            </section>
          </Link>
          {<Route exact path="/schools" render={() => <SchoolCardContainer  />}/>}
      </div>
    )
  }
};

export const mapStateToProps = (state) => ({
  
// ...state
schools: state.schools
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    isLoading,
    hasErrored,
    getAllSchools
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
