const isServerless = process.env.NODE_ENV_SERVERLESS === 'serverless';

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
  distDir: "/fromNext",
  assetPrefix: isServerless? 'http://localhost:8010/fictionio-dev/us-central1/front' : '/'
}
