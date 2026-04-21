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

  const response = await knockoutCreatedPokemon(pokemonId);
  expect(response.status).to.equal(200);
}

module.exports = {
  createTestPokemon,
  cleanupPokemon,
};