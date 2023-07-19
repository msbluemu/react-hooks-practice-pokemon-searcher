import React, {useState, useEffect} from "react";

function Search({ pokemons, setPokemons }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterPokemons(e.target.value)
  };
 
  function filterPokemons(query){
    const filteredPokemons = pokemons.filter((pokemon) => 
       pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setPokemons(filteredPokemons)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
               value={searchQuery}
               onChange={handleSearch}
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
