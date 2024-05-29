
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikedPokemon = ({ likedPokemon }) => {
  return (
    <div className="liked-pokemon">
      <h2> Pokémon you have liked <FontAwesomeIcon icon={faHeart} className="heart-icon" /></h2>
      <div className="pokemon-list">
        {likedPokemon.map(pokemon => (
          <div key={pokemon.id} className="pokemon-item">
            <div className="pokemon-image">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt={pokemon.name}
              />
            </div>
            <h3>{pokemon.name} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPokemon;