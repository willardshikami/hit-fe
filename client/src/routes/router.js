import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTechie from "../components/AddTechie";
import Techie from "../components/Techie";
import Techielist from "../components/Techielist";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Apollo Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


const Navigation = () => (
  <ApolloProvider client={client}>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addtechie">AddTechie</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Techielist} />
      <Route path="/addtechie" component={AddTechie} />
      <Route path="/techie" component={Techie} />
    </div>
  </Router>
  </ApolloProvider>
);

export default Navigation;