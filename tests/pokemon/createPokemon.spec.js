const { expect } = require('chai');
const {
  createPokemonForTrainer,
  knockoutCreatedPokemon,
} = require('../../src/service/pokemonService');

describe('Pokemon API - Create Pokemon', function () {
    let pokemonId;

  afterEach(async function () {
    if (pokemonId) {
      const knockoutResponse = await knockoutCreatedPokemon(pokemonId);
      expect(knockoutResponse.status).to.equal(200);
      pokemonId = null;
    }
  });

  it('should create pokemon successfully', async function () {
    const response = await createPokemonForTrainer();

    expect(response.status).to.equal(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('id');

    pokemonId = response.body.id;
  });
});