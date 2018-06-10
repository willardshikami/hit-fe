import React, { Component } from 'react';
import '../css/index.css'
import { graphql } from 'react-apollo';
import { getTechie } from '../queries/queries';


class Techie extends Component {
  render() {
console.log(this.props)
    return (
      <div style={{ background: '#F2F2F2', padding: '50px' }}>
        <h1>TECHIE PAGE</h1>
      </div>
    );
  }
}

export default graphql(getTechie)(Techie);