import React from "react";
import Country from "../components/Country";
import { useQuery } from "@apollo/react-hooks";
import { GET_COUNTRIES } from "../query/query-pool";


function CountryComponent(props)
{
    const { data, loading, error } = useQuery(
        GET_COUNTRIES, {variables: {query: props.continent.code}}
    );
    if (loading) return <h3> </h3>;
    if (error) return <h2>404. Looks like API is down!</h2>;
     

    let title = false;

    data.countries.map(country => 
        country.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1 && props.search.length > 0 ?
        title = true : null);

    return (
        <div className="card-title">
            <div className="card-body">
                {title ? props.continent.name : null}
            </div>
            {data.countries.map((country, index) => <Country key={index} country={country} search={props.search}/>)}
        </div>
    )
}

export default CountryComponent;
