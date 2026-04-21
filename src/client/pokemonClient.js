const { request } = require('./httpClient');

async function createPokemon(payload) {
  return request('/pokemons', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

async function addPokemonToPokeball(pokemonId) {
  return request('/trainers/add_pokeball', {
    method: 'POST',
    body: JSON.stringify({
      pokemon_id: String(pokemonId),
    }),
  });
}

async function knockoutPokemon(pokemonId) {
  return request('/pokemons/knockout', {
    method: 'POST',
    body: JSON.stringify({
      pokemon_id: String(pokemonId),
    }),
  });
}

module.exports = { createPokemon, addPokemonToPokeball, knockoutPokemon, };