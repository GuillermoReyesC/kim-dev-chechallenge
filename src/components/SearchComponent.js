import React from "react";

function SearchComponent(props) {
  return (
    <div className="card-header">
      <h3>Type your country</h3>
      <input
        className="input-text"
        type="text"
        placeholder="Search a Country"
        value={props.search}
        onChange={(event) => {
          props.set(event.target.value);
          console.log('u wrote this:'+ event.target.value);
        }}
      />
      <hr />
    </div>
  );
}

export default SearchComponent;
