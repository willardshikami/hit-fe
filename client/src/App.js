import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Components
import Techielist from './components/Techielist'

//Apollo Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>  
        <div className="App">
          <div>
            <h1>This is the header</h1>
            <Techielist />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;