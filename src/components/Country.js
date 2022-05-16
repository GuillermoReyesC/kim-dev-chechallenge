import React, { Component } from "react";

export default function Country(props) {
  const country = props.country;

  if (
    props.country.name
      .toLowerCase()
      .indexOf(props.search.toLowerCase() > -1 && props.search.length > 0)
  ) {
    return (
      <div className="card">
        <div className="card-title">
          <span
            role="img"
            aria-label={country.emoji ? country.emoji : " no emoji :( "}
          >
            {country.emoji ? country.emoji : " no emoji :( "}
          </span>
          {"" + country.name}
        </div>

        <div className="card-body">
          <p>
            <strong>Capital:</strong> {country.capital} <br />
            <strong>Continent:</strong> {country.continent} <br />
            <strong>Phone Code</strong> {country.phone} <br />
            <strong>Local Name</strong> {country.native} <br />
            <strong>Currency:</strong> {country.currency} <br />
            <strong>Languages:</strong>{" "}
            {country.languages.map((language) => language.name).join(", ")}{" "}
            <br />
            <strong>Emoji:</strong> {country.emoji} <br />
          </p>
        </div>
      </div>
    );
  }
  return null;
}
