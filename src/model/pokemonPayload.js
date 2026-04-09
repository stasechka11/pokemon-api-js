function buildCreatePokemonPayload(overrides = {}) {
  return {
    name: 'Pikachu',
    photo_id: 1,
    ...overrides,
  };
}

module.exports = { buildCreatePokemonPayload };