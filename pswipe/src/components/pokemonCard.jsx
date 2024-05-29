import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon, onLike, onDislike }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await axios.get(pokemon.url);
      setSelectedPokemon(response.data);
    };

    fetchPokemonDetails();
  }, [pokemon]);

  return (
    selectedPokemon && (
      <div className="pokemon-card">
        <div className="pokemon-details">
          <div className="pokemon-image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${selectedPokemon.id}.svg`}
              alt={selectedPokemon.name}
            />
          </div>
          <h2>{selectedPokemon.name}</h2>
          <p>
            Abilities: {selectedPokemon.abilities.map(ability => ability.ability.name).join(', ')}
          </p>
          <p>
            Types: {selectedPokemon.types.map(type => type.type.name).join(', ')}
          </p>
          <div className="buttons">
            <button className="like-button" onClick={() => onLike(selectedPokemon)}>Like</button>
            <button className="dislike-button" onClick={() => onDislike()}>Dislike</button>
          </div>
        </div>
      </div>
    )
  );
};

export default PokemonCard;
