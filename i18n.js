const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const NextI18Next = require('next-i18next/dist/commonjs');
const isServerless = process.env.NODE_ENV_SERVERLESS === 'serverless';

module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths,
  backend: {
    loadPath: isServerless?'/fictionio-dev/us-central1/front/static/locales/{{lng}}/{{ns}}.json':'/static/locales/{{lng}}/{{ns}}.json',
  }
});
