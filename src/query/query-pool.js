import { gql } from "apollo-boost";

export const GET_ALL_COUNTRIES = gql`
query getAllCountries {
    countries { 
      name
      native
      phone
      capital
      currency
      emoji
      languages {
          name
      }
      continent {
          name
          code
      }
    }
  }
`;


export const GET_COUNTRIES = gql`
query getCountries ($query: String!) {
    countries (filter: {continent: {eq: $query}}) {      
      name
      native
      phone
      capital
      currency
      emoji
    }
  }
`;

export const GET_CONTINENTS = gql`
query continent {
    continents {     
      name
      code
    }
  }
`;

export const GET_LANGUAGES = gql`
query getLanguages  {
    languages {      
      name
      native
    }
  }
`;

