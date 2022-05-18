import React from 'react';
import Country from './Country';

function GetCountryByLanguageComponent(props)
{   
    let title = false;
    props.countries.map(country => 
        country.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1 && props.search.length > 0 &&
        country.languages.map(language => language.name === props.language.name ?
        title = true : null));

    return (
        <div className="card-title">
            <div className="card-body">
                {title ? props.language.name : null}
            </div>
            {props.countries.map(
                (country, index) => 
                country.languages.map(
                    language => language.name === props.language.name
                ? <Country key={index} country={country} search={props.search}/>
                : null
                ))}
        </div>
    )

}
export default GetCountryByLanguageComponent;