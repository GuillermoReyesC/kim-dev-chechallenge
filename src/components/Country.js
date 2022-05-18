import React from "react";
import "../App.css";


function Country(props) {
    const country = props.country;

    if (props.country.name.toLowerCase().indexOf(
            props.search.toLowerCase()) > -1 && props.search.length > 0) 
            {
        return (
            <div className="card-content">
                <div className="card-title">
                   
                    <span> {"  " + country.name} </span>
                   
                </div>
                <br/>
                <div className="card-body">
                    <ul className="card-body">
                   <li> Capital: {country.capital} <br/></li>
                   <li> Emoji: {country.emoji} <br/></li>
                   <li> Moneda: {country.currency} <br /></li>
                   <li> Nombre nativo: {country.native} <br/></li>
                   <li> Codigo telefono: +{country.phone} <br/></li>
                    </ul>
                </div>
            
            </div>
        )
    }
    return null;
}

export default Country;


