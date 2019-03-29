const { setConfig } = require('next/config');

setConfig(require('./next.config'));

const nextI18next = require('./i18n');
const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');

const app = next({ dev: false });
const handle = app.getRequestHandler();

const slasher = handler => (req, res) => {
  if (req.url === '') {
    req.url = '/';
  }

  return handler(req, res);
};

const createServer = () => {
  app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));
  server.get('*', (req, res) => handle(req, res));
  return server;
};

module.exports = slasher((req, res) => {
  return app
    .prepare()
    .then(() => {
      const handler = createServer();
      return handler(req, res);
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });
});
