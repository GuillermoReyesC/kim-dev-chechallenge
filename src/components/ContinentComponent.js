import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_CONTINENTS} from '../query/query-pool';
import CountryComponent from './CountryComponent';

function ContinentComponent(props)
{
    let title = false;
    const { data, loading, error } = useQuery(
        GET_CONTINENTS
    );
    if (loading) return <h3> </h3>;
    if (error) return <h2>404. Looks like API is down!</h2>;
    /* console.log(data); */
        
        

    return (
        <div className="card-title">
            <div className="card-body">
               <span>
               {title ? props.continent.name : null}
               </span>

                {
                data.continents.map(
                    continent => <CountryComponent continent={continent} languages={""} search={props.search} />)}
            </div>
        </div>
    )
}

export default ContinentComponent;
