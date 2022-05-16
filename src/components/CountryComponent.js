import React from "react";
import Country from "../components/Country";
import { useQuery } from "@apollo/react-hooks";
import { GET_COUNTRIES } from "../query/query-pool";

function CountryComponent(props)
{
    const { loading, error, data } = useQuery(GET_COUNTRIES, {variables: {continent: props.continent.code}});
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h2>404. Looks like API is down!</h2>;
    return null;
    console.log(data);

    let title = false

    data.countries.map(
            country => country.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1 && props.search.length > 0 ? title = true : null                 
    )
        return (
            <div className="card">
                <div className="card-title">
                {title ? props.continent.name : null}
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {data.countries.map(
                            country => <Country country={country} search={props.search}

                            />
                        )}
                    </ul>
                </div>
            </div>
        )

    

}
export default CountryComponent;