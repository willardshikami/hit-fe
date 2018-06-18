import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTechie from "../components/AddTechie";
import Techielist from "../components/Techielist";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import '../css/router.css';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

//Apollo Setup
const client = new ApolloClient({
  uri: 'https://humansintech.herokuapp.com/graphql'
})


const Navigation = () => (
  <ApolloProvider client={client}>
  <Router>
  <Fabric>
    <div className="navbar">
     <div className="logo">Humans in Tech</div>
     <div className="nav">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/submissions">SUBMISSIONS</Link>
        </li>
      </ul>
      </div>

      <Route exact path="/" component={Techielist} />
      <Route path="/submissions" component={AddTechie} />
    </div>
   </Fabric>
  </Router>
  </ApolloProvider>
);

export default Navigation;