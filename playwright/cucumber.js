const { features } = require("process");

module.exports = {
  default: {
    require: ['ts-node/register', "tests/cucumber/steps/**/*.ts"],
    features: ['tests/cucumber/features/**/*.feature'],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    paths: ['tests/cucumber/features/'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    publishQuiet: true
  }
};
