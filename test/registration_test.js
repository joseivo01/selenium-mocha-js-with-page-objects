const { Builder, By, until } = require('selenium-webdriver');

const elements = require('../support/elements'); // Importa elements.js de ../support/elements
const { generateString } = require('../support/utils'); // Importa utils.js de ../support/utils

const RegistrationPage = require('../support/pages/registration_page')

describe('CommerceOS Registration', function () {
  this.timeout(50000); // Increase timeout for Mocha
  let driver;
  let registrationPage;
  let first_name, last_name, company_name, password_string, email, phone_number, vat_number;

  beforeEach(async function () {
    driver = await new Builder().forBrowser('firefox').build();
    registrationPage = new RegistrationPage(driver);

    first_name = generateString('first_name');
    last_name = generateString('last_name');
    company_name = generateString('company');
    password_string = generateString('Test_');
    email = `${generateString("new_email@gmail.com")}`;
    phone_number = parseInt(generateString("4568"));
    vat_number = parseInt(generateString("4578"));
  });

  afterEach(async function () {
    if (driver) {
      await driver.quit();
    }
    // Reset mocked variables if necessary
    // If stop running because email exists, running again : )
    first_name = null;
    last_name = null;
    company_name = null;
    password_string = null;
    email = null;
    phone_number = null;
    vat_number = null;
  });

  // Test Case 1
  it('Test Case 1: Validate apps for value "fashion"', async () => {
    // Step 1: Visit registration URL
    registrationPage.openSite("fashion");
    // Step 2: Fill out the user information
    await registrationPage.fillUserInfo(first_name, last_name, email, password_string);
    // Step 3: Click 'Next'
    await registrationPage.clickSignUp();
    // Step 4: Fill out the business information
    await registrationPage.fillBusinessInfoFashion(company_name, phone_number);
    // Step 5: Register the account
    await registrationPage.clickSignUp();
    // Step 6: Click on get started
    await registrationPage.clickWelcomeButton();
    await registrationPage.waitForDashboard();
    const expectedApps = [
      'Shop',
      'Point of Sale',
      'Transactions',
      'Products',
      'Connect',
      'Checkout',
      'Settings'
  ];
  const foundTexts = await registrationPage.getIconsText()
  for (let app of expectedApps) {
      if (foundTexts.some(text => text.includes(app))) {
          console.log(`Text "${app}" founded inside .icons__title`);
      }
  }
  });

  // Test Case 2
  it('Test Case 2: Validate apps for value "santander"', async () => {
    registrationPage.openSite("santander");
    await registrationPage.fillUserInfo(first_name, last_name, email, password_string);
    await registrationPage.clickSignUp();
    await registrationPage.fillBusinessInfoSantander(company_name, phone_number, vat_number);
    await registrationPage.clickSignUp();
    await registrationPage.clickWelcomeButton();
    await registrationPage.waitForDashboard();
    
    // Validate apps on the dashboard
    const expectedApps = [
      'Checkout',
      'Connect',
      'Point of Sale',
      'Transactions',
      'Products',
      'Settings'
    ];

    const foundTexts = await registrationPage.getIconsText()

    // Check the presence of each expected app in the texts found
    for (let app of expectedApps) {
        if (foundTexts.some(text => text.includes(app))) {
            console.log(`Text "${app}" founded inside .icons__title`);
        }
    }
  });
});
