function buildCreatePokemonPayload(overrides = {}) {
  return {
    name: 'generate',
    photo_id: -1,
    ...overrides,
  };
}

module.exports = { buildCreatePokemonPayload };