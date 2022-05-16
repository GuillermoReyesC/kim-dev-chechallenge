import React from "react";
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});
//lista de paises

const GET_ALL_COUNTRIES = gql`
  {
    countries {
      name
      code
      native
      emoji
      currency
      languages {
        name
        code
      }
    }
  }
`;


export const CountryList = () => (
  <Query query={GET_ALL_COUNTRIES}>
    {({ loading, error, data }) => {
      console.log(data);
      if (loading) return <h1>Loading...</h1>;
      if (error) return <h2>404. Looks like API is down!</h2>;


      return (
        <>
          <div className="md-6">
            
            <div className="card">
              
                  <Query query={GET_ALL_COUNTRIES}>
                    {({ loading, error, data }) => {
                      if (loading) return <h1>Loading...</h1>;
                      if (error) return <h2>404. Looks like API is down!</h2>;
                      return (
                        <div className="card-body">
                          <h1> list of Countries</h1>
                          <p>for reference</p>
                          <ul className="list-group">
                            {data.countries.map((country) => (
                              <li
                                className="list-group-item"
                                key={country.code}
                              >
                                Pais: {country.name} <br />
                                Continente: {country.continent} <br />
                                Codigo: {country.code} <br />
                                Moneda: {country.currency} <br />
                                Lenguaje: {country.languages.name} <br />
                                Emoji: {country.emoji} <br />
                                
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }}
                  </Query>
                </div>
          </div>
        </>
      );
    }}
  </Query>
);

export default CountryList;

