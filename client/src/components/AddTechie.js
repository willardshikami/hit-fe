import React, { Component } from 'react';
import { Row, Col, Input, Button} from 'antd';


class AddTechie extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:'',
      bio: '',
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
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <Row>

          <Col span={12}>
            col-12
          </Col>

          <Col span={12}>
            <form>

              <div className="field">
                <label>Full Name</label>
                  <Input type="text" onChange={ (e) => this.setState({ name: e.target.value})}/>
                <label>This field is required</label>
              </div>

              <div className="field">
                <label>Profile Image</label>
                  <Input type="text" onChange={ (e) => this.setState({ img: e.target.value})}/>
                <label>This field is required</label>
              </div>

              <div className="field">
                <label>Short Bio</label>
                  <Input type="text" onChange={ (e) => this.setState({ bio: e.target.value})}/>
                <label>This field is required</label>
              </div>

              <div className="field">
                <label>Your Tech Stack</label>
                  <Input type="text" onChange={ (e) => this.setState({ stack: e.target.value})}/>
                <label>This field is required</label>
              </div>

              <div className="field">
                <label>Current Role</label>
                <Input type="text" onChange={ (e) => this.setState({ current_role: e.target.value})}/>
                <label>This field is required</label>
              </div>

              <div className="field">
                <label>Years In Tech</label>
                <Input type="text" onChange={ (e) => this.setState({ years_in_tech: e.target.value})}/>
                <label>This field is required</label>
              </div>

              <div>
                <h2>SOCIAL</h2>
                <p> KINDLY FILL IN THE LINKS TO THEIR SPECIFIED AREAS</p>
              </div>

              <div className="field">
                <label>Twitter</label>
                <Input type="text" onChange={ (e) => this.setState({ twitter: e.target.value})}/>
              </div>

              <div className="field">
                <label>Instagram</label>
                <Input type="text" onChange={ (e) => this.setState({ instagram: e.target.value})}/>
              </div>

              <div className="field">
                <label>LinkedIn</label>
                <Input type="text" onChange={ (e) => this.setState({ linkedin: e.target.value})}/>
              </div>

              <div className="field">
                <label>Github</label>
                <Input type="text" onChange={ (e) => this.setState({ github: e.target.value})}/>
              </div>

              <div className="field">
                <label>Website</label>
                <Input type="text" onChange={ (e) => this.setState({ website: e.target.value })}/>
              </div>

              <div>
                <Button onClick={this.submitData.bind(this)} type="primary">Submit</Button> 
              </div>

            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddTechie;
