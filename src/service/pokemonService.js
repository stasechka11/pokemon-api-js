const {
  createPokemon,
  addPokemonToPokeball,
  knockoutPokemon,
} = require('../client/pokemonClient');

const { buildCreatePokemonPayload } = require('../model/pokemonPayload');

async function createPokemonForTrainer(overrides = {}) {
  const payload = buildCreatePokemonPayload(overrides);
  return createPokemon(payload);
}

async function addCreatedPokemonToPokeball(pokemonId) {
  return addPokemonToPokeball(pokemonId);
}

async function knockoutCreatedPokemon(pokemonId) {
  return knockoutPokemon(pokemonId);
}

module.exports = {
  createPokemonForTrainer,
  addCreatedPokemonToPokeball,
  knockoutCreatedPokemon,
};