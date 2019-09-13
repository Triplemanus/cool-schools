import React, {Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class searchForm extends Component {
  constructor() {
    super(),
    this.state = {
      locState: '',
      level: '',
      latLocation: '',
      longLocation: '',
      maxDistance: ''
    }
  }
  updateForm = e => {
    this.setState({ [e.target.name]: [e.target.vale] });
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

  searchSchools() {
    const { isLoading, hasFailed, selectSchools } = this.props;
    e.preventDefault();
    try {
      isLoading(true);
      const newSearch = await searchSchools({ ...this.state});
      selectSchools({ ...this.state});
      isLoading(false);
      this.clearInputs;
    } catch({ message }) {
      isLoading(false);
      hasFailed(message)
    }
  }

  render() {
    const { locState, level, latLocation, longLocation, maxDistance } = this.state;
    return(
      <header>
        <h1>Search Form</h1>
        <form>
          <input
            name="locState"
            value={locState}
            placeholder="State"
            onChange={this.updateForm}        
          />
          <input
            name="level"
            value={level}
            placeholder="Level"
            onChange={this.updateForm}          
          />
          <input
          name="latLocation"
          value={latLocation}
          placeholder="Latitude"
          onChange={this.updateForm}
          />
          <input
          name="longLocation"
          value={longLocation}
          placeholder="Longitude"
          onChange={this.updateForm}
          />
          <input
          name="maxDistance"
          value={maxDistance}
          placeholder="Distance"
          onChange={this.updateForm}
          />
          <button onClick={this.searchSchools}>
            Search Schools
          </button>
        </form>
      </header>
    )
  }

}