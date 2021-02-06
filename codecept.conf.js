exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.saucedemo.com/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/Login.js',
    inventoryPage: './pages/Inventory.js',
    cartPage: './pages/cart.js',
    checkoutCompletePage: './pages/CheckoutComplete.js',
    checkoutUserInformationPage: './pages/CheckoutUserInformation.js',
    checkoutOverviewPage: './pages/CheckoutOverview.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'CodeceptJSTest'
}