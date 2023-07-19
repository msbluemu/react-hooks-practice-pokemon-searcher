import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
     .then((r) => r.json())
     .then((data) => {
      setPokemons(data);
     })
  }, [])

  function handleAddPokemon(newPokemon){
    setPokemons([...pokemons, newPokemon])
  }
 
  return (
    <Container >
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search pokemons={pokemons} setPokemons={setPokemons} />
      <br />
      <PokemonCollection pokemons={pokemons} setPokemons={setPokemons}/>
    </Container>
  );
}

export default PokemonPage;
