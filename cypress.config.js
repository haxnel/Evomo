const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'test-001',
  defaultCommandTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1500,
  e2e: {
    baseUrl: "http://10.50.15.25:8003/",
  },
});
