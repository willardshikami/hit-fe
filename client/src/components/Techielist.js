import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getTechies = gql`
  {
    techies{
      name
      bio
      img
      stack
      current_role
      years_in_tech
      twitter
      instagram
      linkedin
      github
      website
    }
  }
`

class Techielist extends Component {

  loadTechies(){
    var data = this.props.data
    if(data.loading){
      //change to loading icon
      return(<div>Loading...</div>)
    }else{
      return data.techies.map(techie => {
        return(
          <li key={ techie.id }>{ techie.name }</li>
        )
      });
    }
  }

  render() {
    return (
      <div>
        <ul>
          { this.loadTechies() }
        </ul>
      </div>
    );
  }
}

export default graphql(getTechies)(Techielist);
