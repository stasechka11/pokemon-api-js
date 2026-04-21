# Pokemon API JS

JavaScript client for the [Pokemon Battle API](https://api.pokemonbattle.ru/v2).

## Stack

- Node.js (native `fetch`, v18+)
- Mocha + Chai — test framework

## Project Structure

```
src/
├── config/env.js          # Environment variables
├── client/
│   ├── httpClient.js      # HTTP request wrapper
│   └── pokemonClient.js   # Pokemon Battle API calls
├── model/
│   └── pokemonPayload.js  # Request payload builders
└── service/
    └── pokemonService.js  # Business logic

tests/
├── helpers/
│   └── pokemonTestHelper.js          # Shared test utilities
└── pokemon/
    ├── createPokemon.spec.js          # Pokemon creation tests
    └── addPokemonToPokeball.spec.js   # Pokeball tests
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:
   ```
   BASE_URL=https://api.pokemonbattle.ru/v2
   TRAINER_TOKEN=your_trainer_token
   ```

## Running Tests

```bash
npm test
```

Tests are integration tests and require a valid `TRAINER_TOKEN` in `.env`.

> Note: the Pokemon Battle API limits trainers to 5 live Pokemons at a time. Tests create and knockout Pokemons automatically as part of setup and teardown.

## Test Coverage

### Create Pokemon (`createPokemon.spec.js`)

| Test | What is checked |
|---|---|
| should create pokemon successfully | POST /pokemons returns status 201, response body is an object with an `id` field |

Teardown: created Pokemon is knocked out after each test.

### Add Pokemon to Pokeball (`addPokemonToPokeball.spec.js`)

| Test | What is checked |
|---|---|
| should add pokemon to pokeball successfully | POST /trainers/add_pokeball returns status 200, response body is an object with a `message` field |

Setup: a new Pokemon is created before each test.  
Teardown: created Pokemon is knocked out after each test.

## Debugging in VS Code

Two launch configurations are available via **Run & Debug** (F5):

| Configuration | Description |
|---|---|
| Debug Mocha Tests | Runs the full test suite |
| Debug Current Spec File | Runs the spec file currently open in the editor |
