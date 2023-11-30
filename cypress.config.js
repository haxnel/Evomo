const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "test-001",
  defaultCommandTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1500,
  e2e: {
    baseUrl: "masukan url",
  },
});
