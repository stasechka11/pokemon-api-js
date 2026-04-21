const { expect } = require('chai');
const { addCreatedPokemonToPokeball } = require('../../src/service/pokemonService');
const { createTestPokemon, cleanupPokemon } = require('../helpers/pokemonTestHelper');

describe('Pokemon API - Add Pokemon To Pokeball', function () {
  let pokemonId;

  beforeEach(async function () {
    pokemonId = await createTestPokemon();
  });

  afterEach(async function () {
    await cleanupPokemon(pokemonId);
    pokemonId = null;
  });

  it('should add pokemon to pokeball successfully', async function () {
    const response = await addCreatedPokemonToPokeball(pokemonId);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message');
  });
});