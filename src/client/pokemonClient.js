const { request } = require('./httpClient');

async function createPokemon(payload) {
  return request('/pokemons', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

module.exports = { createPokemon };