const { createPokemon } = require('../client/pokemonClient');
const { buildCreatePokemonPayload } = require('../model/pokemonPayload');

async function createPokemonForTrainer(overrides = {}) {
  const payload = buildCreatePokemonPayload(overrides);
  return createPokemon(payload);
}

module.exports = { createPokemonForTrainer };