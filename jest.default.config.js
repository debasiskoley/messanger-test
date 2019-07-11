module.exports = {
  globalSetup: './jest/setup.js',
  globalTeardown: './jest/teardown.js',
  testEnvironment: './jest/puppeteer-environment.js',
  setupTestFrameworkScriptFile: './jest/setup-browser.js',
  // globals: {
  //   "page": null,
  //   "baseUrl": "https://www.instagram.com/"
  // }
}