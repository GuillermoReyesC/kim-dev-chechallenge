import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_CONTINENTS} from '../query/query-pool';
import CountryComponent from './CountryComponent';

function ContinentContainer(props)
{
    const {loading, error, data} = useQuery(GET_CONTINENTS);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h2>404. Looks like API is down!</h2>;
    console.log(data);
    return null;
    return (
        <div className="card">
            <div className="card-title">
                {data.continents.map(
                    continent => <CountryComponent languaje={''} continent={continent} search={props.search}/>
                )}
            </div>
        </div>
    )
}
export default ContinentContainer;