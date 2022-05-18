import React from "react";
import "../App.css";

function Country(props) {
  const country = props.country; //country object

  if (
    props.country.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1 &&
    props.search.length > 0
  ) {
    return (
      <div className="card-content">
        <div className="card-title">
          <span> {"  " + country.name} </span>
        </div>
        <br />
        <div className="card-body">
          <ul className="list">
            <li> Pais: {country.name}</li>
            <li> Capital: {country.capital}</li>
            <li> Emoji: {country.emoji}</li>
            <li> Moneda: {country.currency}</li>
            <li> Nombre nativo: {country.native}</li>
            <li> Codigo telefono: +{country.phone}</li>
          </ul>
        </div>
      </div>
    );
  }
  return null;
}

export default Country;
