import React, { Component } from 'react';
import '../css/index.css'
import { graphql } from 'react-apollo';
import { getTechie } from '../queries/queries';


class Techie extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {user.name}
      </div>
    );
  }
}

export default graphql(getTechie)(Techie);