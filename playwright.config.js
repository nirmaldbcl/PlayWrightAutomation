// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { permission } from 'process';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30 *1000,

  expect : {
    timeout: 4000,
  },
  reporter : 'html',
  use: {

      browserName : 'chromium',
      headless: false,
      screenshot:'on', //off,on,only-on-failure
      trace: 'retain-on-failure', //off,on,retain-on-failure,on-first-retry
      //viewport : {width:720, height:720},
      //ignoreHttpsErrors: true,
      //permissions: ['geolocation'],
      //video:'on-first-retry' //off,on,retain-on-failure,on-first-retry
     
   
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   
  },


});
module.exports = config

