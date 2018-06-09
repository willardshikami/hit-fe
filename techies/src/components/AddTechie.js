import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addTechieMutation, getTechies } from '../queries/queries';

import '../css/addtechie.css';
import { Row, Col, Input} from 'antd';
import Button from 'muicss/lib/react/button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';


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
               <strong>
                <label>FULL NAME</label>
                  <TextField className="input" type="text" onChange={ (e) => this.setState({ name: e.target.value})} required={true}/>
                <label className="req">This field is required</label>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>PERSONAL IMAGE URL</label>
                  <TextField className="input" type="text" onChange={ (e) => this.setState({ img: e.target.value})} required={true}/>
                <label className="req">This field is required</label>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>SHORT BIO</label>
                  <TextField className="input" type="text" onChange={ (e) => this.setState({ bio: e.target.value})} multiline rows={4} required={true}/>
                <label className="req">This field is required</label>
               </strong>  
              </div>
              
              <div className="field">
               <strong>
                <label>ABOUT YOU (proudest career accomplishments, struggles & anything else)</label>
                <TextField className="input" type="text" onChange={ (e) => this.setState({ about: e.target.value})} multiline rows={10} required={true}/>
                <label className="req">This field is required</label>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>YOUR TECH STACK</label>
                  <TextField className="input" type="text" onChange={ (e) => this.setState({ stack: e.target.value})} required={true}/>
                <label className="req">This field is required</label>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>CURRENT ROLE</label>
                <TextField className="input" type="text" onChange={ (e) => this.setState({ current_role: e.target.value})} required={true}/>
                <label className="req">This field is required</label>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>YEARS IN TECH</label>
                <TextField className="input" type="text" onChange={ (e) => this.setState({ years_in_tech: e.target.value})} required={true}/>
                <label className="req">This field is required</label>
               </strong>
              </div>

              <div className="social">
                <h2>PERSONAL LINKS</h2>
                <p> KINDLY FILL IN THE LINKS TO THEIR SPECIFIED AREAS</p>
              </div>

              <div className="field">
               <strong>
                <label>TWITTER</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ twitter: e.target.value})}/>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>INSTAGRAM</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ instagram: e.target.value})}/>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>LINKEDIN</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ linkedin: e.target.value})}/>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>GITHUB</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ github: e.target.value})}/>
               </strong>
              </div>

              <div className="field">
               <strong>
                <label>WEBSITE</label>
                <Input className="input" type="text" onChange={ (e) => this.setState({ website: e.target.value })}/>
               </strong>
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