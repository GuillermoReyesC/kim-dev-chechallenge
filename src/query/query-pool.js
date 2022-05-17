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
    }
  }
`;


export const GET_COUNTRIES = gql`
query getCountries ($cont: String!) {
    countries (filter: {continent: {eq: $cont}}) {
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

