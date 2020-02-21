const { defaults } = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testResultsProcessor: "jest-allure-reporter",
  reporters: ["default", "jest-allure"],
  setupFilesAfterEnv: ["jest-allure/dist/setup"]
};
