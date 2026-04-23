const { expect } = require('chai');
const {
  createPokemonForTrainer,
  knockoutCreatedPokemon,
} = require('../../src/service/pokemonService');

async function createTestPokemon(overrides = {}) {
  const response = await createPokemonForTrainer(overrides);

  expect(response.status).to.equal(201);
  expect(response.body).to.be.an('object');
  expect(response.body).to.have.property('id');

  return response.body.id;
}

async function cleanupPokemon(pokemonId) {
  if (!pokemonId) {
    return;
  }

  await knockoutCreatedPokemon(pokemonId);
}

module.exports = {
  createTestPokemon,
  cleanupPokemon,
};