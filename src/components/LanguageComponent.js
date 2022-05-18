import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LANGUAGES } from "../query/query-pool";
import GetCountryByLanguageComponent from "./GetCountryByLanguageComponent";

function LanguageComponent(props) {
  let title = false;
  const { data, loading, error } = useQuery(GET_LANGUAGES);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h2>404. Looks like API is down!</h2>;
  /* console.log(data); */

  return (
    <div className="card-title">
      <div className="card-body">
        {title ? props.language.name : null}
        {data.languages.map((language, index) => (
          <GetCountryByLanguageComponent 
            key={index}
            countries={props.countries}
            language={language}
            search={props.search}
          />
        ))}
      </div>
    </div>
  );
}

export default LanguageComponent;
