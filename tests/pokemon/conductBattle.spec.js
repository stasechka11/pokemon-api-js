const { expect } = require('chai');
const { addCreatedPokemonToPokeball, findOpponentPokemon, conductPokemonBattle } = require('../../src/service/pokemonService');
const { createTestPokemon, cleanupPokemon } = require('../helpers/pokemonTestHelper');

describe('Pokemon API - Conduct Battle', function () {
  let myPokemonId;
  let opponentPokemonId;

  beforeEach(async function () {
    myPokemonId = await createTestPokemon();
    await addCreatedPokemonToPokeball(myPokemonId);

    const response = await findOpponentPokemon();
    expect(response.status).to.equal(200);
    const opponent = response.body.data.find(p => p.id !== String(myPokemonId));
    expect(opponent, 'No opponent pokemon found in pokeball').to.exist;
    opponentPokemonId = opponent.id;
  });

  afterEach(async function () {
    await cleanupPokemon(myPokemonId);
    myPokemonId = null;
    opponentPokemonId = null;
  });

  it('should conduct battle successfully', async function () {
    const response = await conductPokemonBattle(myPokemonId, opponentPokemonId);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message', 'Битва проведена');
  });
});
