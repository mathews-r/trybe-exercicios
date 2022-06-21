import React from 'react';
import pokemons from '../data/data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
    <div className='pokedex'>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image} />)}
    </div>
    );
  }
}

export default Pokedex;