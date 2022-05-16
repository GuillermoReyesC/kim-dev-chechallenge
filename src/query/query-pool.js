import { gql } from "apollo-boost";

export const GET_ALL_COUNTRIES = gql`
    query getAllCountries {
        countries {
            name
            code
            native
            emoji
            flag
            currency
            continent
            capital
            languages {
                name
                code
            }
        }
    }
`;


export const GET_COUNTRIES = gql`
query getCountries($continent: String!) {
    countries(filter: { continent: { eq: $continent } }) {
        name
        code
        native
        emoji
        flag
        currency
        continent
        capital
        languages {
            name
            code
        }
    }
}
`;

export const GET_CONTINENTS = gql`
    query getContinents {
        continents {
            name
            code
        }
    }
`;

export const GET_LANGUAGES = gql`
    query getLanguages {
        languages {
            name
            native
            code
        }
    }
`;

