import React, {Component } from 'react';
import { connect } from 'react-redux';
import { addSchools, searchSchools, isLoading, hasErrored } from '../actions/index';
import { fetchAllSchools } from '../apiCalls/apiCalls';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      locState: '',
      level: '',
      latLocation: '',
      longLocation: '',
      maxDistance: ''
    }
  };

  updateForm = e => {
    this.setState({ [e.target.name]: [e.target.value] });
    console.log('updateForm state, locState is:', this.state, this.state.locState);
  };

  clearInputs = () => {
    this.setState({ 
      locState: '',
      level: '',
      latLocation: '',
      longLocation: '',
      maxDistance: ''
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const querySchools = {
      state: this.state.locState,
      level: this.state.level,
      latLocation: parseFloat(this.state.latLocation),
      longLocation:  parseFloat(this.state.longLocation),
      maxDistance: parseInt(this.state.maxDistance)
    };
    console.log('querySchools: ', querySchools);
    this.searchSchools(querySchools);
    this.clearInputs();

  }

  searchSchools = querySchools => {
    fetchAllSchools(querySchools)
    .then(schools => {
      console.log('schools: ', schools);
      this.props.addSchools(schools)})
    .catch(error => this.setState({ error: error }));
  }

  // searchSchools = async e => {
  //   const { isLoading, hasErrored, selectSchools } = this.props;
  //   e.preventDefault();
  //   try {
  //     isLoading(true);
  //     const newSearch = await searchSchools({ ...this.state});
  //     selectSchools({ ...this.state});
  //     isLoading(false);
  //     this.clearInputs;
  //   } catch({ message }) {
  //     isLoading(false);
  //     hasErrored(message)
  //   }
  // }

  render() {
    const { locState, level, latLocation, longLocation, maxDistance } = this.state;
    console.log('state is : ', this.state);
    return(
      <header>
        <h1>Search Form</h1>
        <form id="SearchForm">
          <input
            type="text"
            name="locState"
            value={locState}
            placeholder="State"
            onChange={this.updateForm}        
          />
          <input
            name="level"
            value={this.state.level}
            placeholder="Level"
            onChange={this.updateForm}          
          />
          <input
          name="latLocation"
          value={this.state.latLocation}
          placeholder="Latitude"
          onChange={this.updateForm}
          />
          <input
          name="longLocation"
          value={this.state.longLocation}
          placeholder="Longitude"
          onChange={this.updateForm}
          />
          <input
          name="maxDistance"
          value={this.state.maxDistance}
          placeholder="Distance"
          onChange={this.updateForm}
          />
          <button onClick={event => this.handleSubmit(event)}>
            Search Schools
          </button>
        </form>
      </header>
    )
  }
}

export const mapStateToProps = state => ({
  ...state
});

export const mapDispatchToProps = dispatch => ({
  addSchools: schools => dispatch(addSchools(schools))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
