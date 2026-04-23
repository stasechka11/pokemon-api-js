const {
  createPokemon,
  addPokemonToPokeball,
  knockoutPokemon,
  getPokemons,
  conductBattle,
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

async function findOpponentPokemon() {
  return getPokemons({ in_pokeball: 1, sort: 'asc_attack' });
}

async function conductPokemonBattle(attackingPokemonId, defendingPokemonId) {
  return conductBattle(attackingPokemonId, defendingPokemonId);
}

module.exports = {
  createPokemonForTrainer,
  addCreatedPokemonToPokeball,
  knockoutCreatedPokemon,
  findOpponentPokemon,
  conductPokemonBattle,
};