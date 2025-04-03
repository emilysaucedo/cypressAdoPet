const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: "xp6cuw",
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        USER_ID: process.env.CYPRESS_USER_ID,
        AUTHORIZATION_TOKEN: process.env.CYPRESS_AUTHORIZATION_TOKEN,
        API_URL: process.env.CYPRESS_API_URL
      };
      return config;
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss'
    }
  },
});
