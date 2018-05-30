import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import getTechies from '../queries/queries';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;


class Techielist extends Component {

  loadTechies(){
    var data = this.props.data
    if(data.loading){
      //change to loading icon
      return(<div>Loading...</div>)
    }else{
      return data.techies.map(techie => {
        return(
          
          <Col key={ techie.id } span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={techie.img} />}
              >
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
      <div style={{ background: '#F2F2F2', padding: '30px' }}>
        <Row gutter={16}>
          { this.loadTechies() }
        </Row>
      </div>
    );
  }
}

export default graphql(getTechies)(Techielist);