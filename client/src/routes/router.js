import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTechie from "../components/AddTechie";
import Techie from "../components/Techie";
import Techielist from "../components/Techielist";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import '../css/router.css';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

//Apollo Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


const Navigation = () => (
  <ApolloProvider client={client}>
  <Router>
  <Fabric>
    <div className="nav">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/addtechie">SUBMIT</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Techielist} />
      <Route path="/addtechie" component={AddTechie} />
      <Route path="/techie" component={Techie} />
    </div>
   </Fabric>
  </Router>
  </ApolloProvider>
);

export default Navigation;