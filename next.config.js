/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(); // pass the modules you would like to see transpiled

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
});
