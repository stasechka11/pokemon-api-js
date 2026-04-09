const { expect } = require('chai');
const { createPokemonForTrainer } = require('../../src/service/pokemonService');

describe('Pokemon API - Create Pokemon', function () {
  it('should create pokemon successfully', async function () {
    const response = await createPokemonForTrainer({
      name: 'Pikachu',
      photo_id: 1,
    });

    expect(response.status).to.equal(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('id');
  });
});