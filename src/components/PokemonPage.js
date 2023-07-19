import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);


  useEffect(()=> {
    fetch("  http://localhost:3001/pokemon")
     .then((r) => r.json())
     .then((data) => {
      setPokemons(data);
      setFilteredPokemons(data);
     })
  }, [])

  const handleSearch = (searchQuery) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  return (
    <Container >
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemons} setPokemons={setPokemons}/>
    </Container>
  );
}

export default PokemonPage;
