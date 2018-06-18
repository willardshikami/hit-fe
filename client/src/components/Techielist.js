import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Col, Row } from 'antd';
import { getTechies } from '../queries/queries';

import 'gestalt/dist/gestalt.css';
import '../css/index.css';
import '../css/techielist.css';

import {
  Avatar,
  Spinner
} from "gestalt";



class Techielist extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: null,
      show: true
    };
  }

  loadTechies(){
    var data = this.props.data
    if(data.loading){
      //change to loading icon
      return(<div className="loading">
        <Spinner show={this.state.show} accessibilityLabel="Load Data" />
      </div>)
    }else{
      return data.techies.map(techie => {
        return(
          
          <Col span={8} key={ techie.id }>

          <div className="card">
            <div className="content">

              <div className="avatar">
                  <Avatar
                    src={techie.img}
                    name="Avatar"
                    /> 
              </div>

              <div className="heading">
                <h2>{techie.name}</h2>
                <div className="h4" align="center">{techie.current_role}</div>
              </div>

              <div className="body">
                <div align="center" size="sm">{techie.bio}</div>
              </div>

              <div  className="link">
                <p className="single" color="navy" onClick={ (e) => this.setState({ selected: techie.id })}>View {techie.name}'s profile</p>
              </div>

            </div>
          </div>
          </Col>
            )
      });
    }
  }

  render() {
    return (
      <div className="main">
        <Row gutter={16}>
          { this.loadTechies() }
        </Row>
      </div>
    );
  }
}

export default graphql(getTechies)(Techielist);