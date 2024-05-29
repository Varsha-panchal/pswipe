import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WelcomeScreen from './components/WelcomeScreen';
import PokemonCard from './components/pokemonCard';
import LikedPokemon from './components/Likedpokemon';
import './App.css';

const App = () => {
  const [started, setStarted] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [likedPokemon, setLikedPokemon] = useState([]);
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  const handleStart = () => {
    setStarted(true);
  };

  useEffect(() => {
    const fetchPokemonNames = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      setPokemonList(response.data.results);
    };

    fetchPokemonNames();
  }, []);

  const handleLike = (pokemon) => {
    setLikedPokemon([...likedPokemon, pokemon]);
    moveToNextPokemon();
  };

  const handleDislike = () => {
    moveToNextPokemon();
  };

  const moveToNextPokemon = () => {
    setCurrentPokemonIndex(currentPokemonIndex + 1);
  };

  return (
    <div className="app">
      {!started ? (
        <WelcomeScreen onStart={handleStart} />
      ) : (
        <>
          {currentPokemonIndex < pokemonList.length ? (
            <PokemonCard
              pokemon={pokemonList[currentPokemonIndex]}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          ) : (
            <div className="pokemon-list-end">You've swiped through all available Pokémon!</div>
          )}
          <LikedPokemon likedPokemon={likedPokemon} />
        </>
      )}
    </div>
  );
};

export default App;

