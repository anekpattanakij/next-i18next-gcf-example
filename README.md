# next-i18next-gcf-example
Example for deploying next.js with next-i18next on google cloud function

## Prepare workspace
* clone this repository
* run npm i

## Run in local server mode.
```
npm run dev
```

## Run in serverless mode.
* change asssetPrefix in next.config.js 
* change backend for locales loading path in i18n.js 
* set NODE_ENV=production and NODE_ENV_SERVERLESS = 'serverless' because next.js in dev mode will keep deleting built files, thus it will throw an error.

```
npm run build
```
* run google cloud function deploy cli or deploy to offline simulator by npm run offline
