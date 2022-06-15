import React from "react";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import ExchangeRatesPage from './ExchangeRatesPage';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ExchangeRatesPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
