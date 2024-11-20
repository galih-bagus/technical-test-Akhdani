const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const dotenv = require("dotenv");
// import dotenv from "dotenv";
dotenv.config();

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  env: {
    baseUrl: process.env.BASE_URL,
    // username: process.env.USERNAMESUPERADMIN,
    // password: process.env.PASSWORDSUPERADMIN,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        "module-resolver",
        {
          alias: {
            "@tests": "./tests",
            "@helpers": "./tests/helpers",
          },
        },
      ]);
      on("file:preprocessor", browserify(options));
    },
    specPattern: "tests/scenarios/**/*.test.js",
  },
});
