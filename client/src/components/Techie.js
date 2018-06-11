import React, { Component } from 'react';
import '../css/index.css'
import { graphql } from 'react-apollo';
import { getTechie } from '../queries/queries';


class Techie extends Component {
  render() {
    this.props
    return (
      <div>
        {user.name}
      </div>
    );
  }
}

export default graphql(getTechie)(Techie);