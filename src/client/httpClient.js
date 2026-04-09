const { config } = require('../config/env');

async function request(path, options = {}) {
  const response = await fetch(`${config.baseUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'trainer_token': config.trainerToken,
      ...(options.headers || {}),
    },
  });

  const contentType = response.headers.get('content-type') || '';

  let body;
  if (contentType.includes('application/json')) {
    body = await response.json();
  } else {
    body = await response.text();
  }

  return {
    status: response.status,
    ok: response.ok,
    headers: response.headers,
    body,
  };
}

module.exports = { request };