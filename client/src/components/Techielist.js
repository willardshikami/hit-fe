import React, { Component } from 'react';
import '../css/index.css'
import { graphql } from 'react-apollo';
import { Card, Col, Row } from 'antd';
import { getTechies } from '../queries/queries';

const { Meta } = Card;


class Techielist extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: null
    };
  }

  loadTechies(){
    var data = this.props.data
    if(data.loading){
      //change to loading icon
      return(<div>Loading...</div>)
    }else{
      return data.techies.map(techie => {
        return(
          
          <Col span={8} key={ techie.id } onClick={ (e) => this.setState({ selected: techie.id })}>
            <Card 
              className="techie-card"
              bordered={false}
              cover={<img alt="ProfileImage" src={techie.img} />}>
            <Meta 
              title={ techie.name }
              description={ techie.current_role }
              />
            </Card>
          </Col>
            )
      });
    }
  }

  render() {
    return (
      <div style={{ background: '#F2F2F2', padding: '100px' }}>
        <Row gutter={16}>
          { this.loadTechies() }
        </Row>
      </div>
    );
  }
}

export default graphql(getTechies)(Techielist);