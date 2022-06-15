import React from "react";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import {SpacePage} from './components/spacePage'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <SpacePage />
      </div>
    </ApolloProvider>
  );
}

export default App;