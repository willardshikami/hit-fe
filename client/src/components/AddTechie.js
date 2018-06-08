import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addTechieMutation, getTechies } from '../queries/queries';

import '../css/addtechie.css';
import { Row, Col, Input} from 'antd';
import Button from 'muicss/lib/react/button';
import TextArea from 'antd/lib/input/TextArea';


class AddTechie extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:'',
      bio: '',
      about: '',
      img: '',
      stack: '',
      current_role: '',
      years_in_tech: '',
      twitter: '',
      instagram: '',
      linkedin: '',
      github: '',
      website: ''
    };
  }

  submitData(e){
    e.preventDefault();
    this.props.addTechieMutation({
      variables: {
        name: this.state.name,
        bio: this.state.bio,
        about: this.state.about,
        img: this.state.img,
        stack: this.state.stack,
        current_role: this.state.current_role,
        years_in_tech: this.state.years_in_tech,
        twitter: this.state.twitter,
        instagram: this.state.instagram,
        linkedin: this.state.linkedin,
        github: this.state.github,
        website: this.state.website
      },
      refetchQueries: [{ query: getTechies}]
    })
  }


  render() {
    return (
      <div>
        <Row>

          <Col span={12}>
            col-12
          </Col>

          <Col span={12}>

            <form className="formHead">

              <div className="field">
                <label>FULL NAME</label>
                  <Input className="input" type="text" onChange={ (e) => this.setState({ name: e.target.value})} required="required"/>
                <label className="req">This field is required</label>
              </div>

              <div className="field">
                <label>PERSONAL IMAGE</label>
                  <Input className="input" type="text" onChange={ (e) => this.setState({ img: e.target.value})} required="required"/>
                <label className="req">This field is required</label>
              </div>

              <div className="field">
                <label>SHORT BIO</label>
                  <Input className="input" type="text" onChange={ (e) => this.setState({ bio: e.target.value})} required="required"/>
                <label className="req">This field is required</label>
              </div>
              
              <div className="field">
                <label>ABOUT YOU (proudest career accomplishments, struggles & anything else)</label>
                <TextArea className="input" type="text" onChange={ (e) => this.setState({ about: e.target.value})} required="required"/>
                <label className="req">This field is required</label>
              </div>

              <div className="field">
                <label>YOUR TECH STACK</label>
                  <Input className="input" type="text" onChange={ (e) => this.setState({ stack: e.target.value})} required="required"/>
                <label className="req">This field is required</label>
              </div>

              <div className="field">
                <label>CURRENT ROLE</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ current_role: e.target.value})} required="required"/>
                <label className="req">This field is required</label>
              </div>

              <div className="field">
                <label>YEARS IN TECH</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ years_in_tech: e.target.value})} required="required"/>
                <label className="req">This field is required</label>
              </div>

              <div className="social">
                <h2>SOCIAL</h2>
                <p> KINDLY FILL IN THE LINKS TO THEIR SPECIFIED AREAS</p>
              </div>

              <div className="field">
                <label>TWITTER</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ twitter: e.target.value})}/>
              </div>

              <div className="field">
                <label>INSTAGRAM</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ instagram: e.target.value})}/>
              </div>

              <div className="field">
                <label>LINKEDIN</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ linkedin: e.target.value})}/>
              </div>

              <div className="field">
                <label>GITHUB</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ github: e.target.value})}/>
              </div>

              <div className="field">
                <label>WEBSITE</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ website: e.target.value })}/>
              </div>

              <div className="the-button">
                <Button className="button" color="primary" variant="raised" onClick={this.submitData.bind(this)} type="primary">Submit</Button>
              </div>

            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default compose(
  graphql(addTechieMutation, { name: "addTechieMutation"})
)(AddTechie);
