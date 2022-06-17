const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    baseUrl: "http://10.50.15.25:8003/",
  },
});
