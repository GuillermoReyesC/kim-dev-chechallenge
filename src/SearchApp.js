import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import CountryList from "./CountryList";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});

const SearchApp = () => (
  <ApolloProvider client={client}>
    <CountryList />
  </ApolloProvider>
);
export default SearchApp;
