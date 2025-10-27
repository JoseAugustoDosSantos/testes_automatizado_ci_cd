require("dotenv").config({ quiet: true });

const backend = require(`./resource/data/${process.env.ENV}.json`);

exports.config = {
  output: "./output",
  helpers: {
    REST: {
      endpoint: backend.url,
    },
    JSONResponse: {},
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },

  },

  include: {
    I: "./helpers/steps_file.js",
  },

  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./tests/features/**/*.feature",
    steps: "./tests/steps/**/*Steps.js",
  },
  plugins: {
    screenshotOnFail: {
      enabled: false,
    },
    htmlReporter: {
      enabled: false,
    },
    retryFailedStep: {
      enabled: false,
    },
    eachElement: {
      enabled: false,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  name: "codeceptJS",
  translation: "pt-BR",
};
