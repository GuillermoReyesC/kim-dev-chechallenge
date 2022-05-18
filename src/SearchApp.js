import React, {useState, useEffect} from "react";
import ContinentComponent from "./components/ContinentComponent";
import SearchComponent from "./components/SearchComponent";
import LanguageComponent from "./components/LanguageComponent";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { GET_ALL_COUNTRIES } from "./query/query-pool";
import "./App.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});


  function getLanguages()
  {
    let languageDiv = document.getElementById("language");
    languageDiv.style.display = "block";

    let continentDiv = document.getElementById("continent");
    continentDiv.style.display = "none";

    let searchLanguage = document.getElementById("searchByLanguage");
    searchLanguage.className = "active";

    let searchContinent = document.getElementById("searchByContinent");
    searchContinent.className = "";

  }

  function getContinents()
  {
    let languageDiv = document.getElementById("language");
    languageDiv.style.display = "none";
    
    let continentDiv = document.getElementById("continent");
    continentDiv.style.display = "block";
    
    let searchLanguage = document.getElementById("searchByLanguage");
    searchLanguage.className = "";

    let searchContinent = document.getElementById("searchByContinent");
    searchContinent.className = "active";
  
  }

  function SearchApp() 
  {
    const [search, setSearch] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      client
        .query({
          query: GET_ALL_COUNTRIES,
        })
        .then((response) => {
          setCountries(response.data.countries);
        });
    }, []);
    /* console.log(countries); */
    if (countries) {
      return(
        <ApolloProvider client={client}>
                <div className="card">
                  <div className="card-header">
                    <h1>Country Search App</h1>
                  </div>
                  <div className="card-body">
                    <SearchComponent set={setSearch}/>
                    <div className="card-body">
                      
                       <h4> Group by :</h4>
                        <button 
                          id="searchByContinent" 
                          className="myButton" 
                          onClick={getContinents}
                        >
                          Continents
                        </button><span> </span>
                        <button 
                          id="searchByLanguage" 
                          className="myButton" 
                          onClick={getLanguages}
                        >
                          Languages
                        </button>
                      </div>
                      <div id="continent" style={{display: 'block'}} className="col-md-6">
                        <ContinentComponent  search={search}/>
                        </div>
                      <div id="language" style={{display: 'none'}} className="col-md-6">
                        <LanguageComponent countries={countries} search={search}/>
                      </div>
                    </div>
                  </div>                
        </ApolloProvider>
      )
    }  else {
      
     }


  }

  export default SearchApp;

