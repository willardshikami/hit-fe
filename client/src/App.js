import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Components
import Techielist from './components/Techielist'
import AddTechie from './components/AddTechie';

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
            <AddTechie/>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;