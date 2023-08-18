const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");


module.exports = defineConfig({

  e2e: {

    baseUrl: 'https://www.lambdatest.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotsFolder: "cypress/screenshots",
    //chromeWebSecurit: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {

        lighthouse: lighthouse((lighthouseReport) => {
          console.log(lighthouseReport)
        }),
        //log(message) {
        //  console.log(message)
      
       //   return null
       // },
      })
    },
  },
});
