const { By, until } = require('selenium-webdriver');
const elements = require('../elements');

class RegistrationPage {
  constructor(driver) {
    this.driver = driver;
  }

  async openSite(specificRoute) {
    await this.driver.get(`https://commerceos.staging.devpayever.com/registration/${specificRoute}`);
  }

  async fillUserInfo(firstName, lastName, email, password) {
    await this.driver.wait(until.elementLocated(By.css(elements.first_name)), 8000);
    await this.driver.findElement(By.css(elements.first_name)).sendKeys(firstName);
    await this.driver.findElement(By.css(elements.last_name)).sendKeys(lastName);
    await this.driver.findElement(By.css(elements.email_input)).sendKeys(email);
    await this.driver.findElement(By.css(elements.password_input)).sendKeys(password);
    await this.driver.findElement(By.css(elements.confirm_password_input)).sendKeys(password);
  }

  async clickSignUp() {
    await this.driver.findElement(By.css(elements.sign_up_button)).click();
  }

  async fillBusinessInfoSantander(companyName, phoneNumber, vatNumber) {
    await this.driver.wait(until.elementLocated(By.css(elements.company_input_santander)), 15000);
    await this.driver.findElement(By.css(elements.company_input_santander)).sendKeys(companyName);
    await this.driver.findElement(By.css(elements.phone_input_santander)).sendKeys(phoneNumber);
    await this.driver.findElement(By.css(elements.VAT_number_input)).sendKeys(vatNumber);
    await this.driver.findElement(By.css(elements.industry_select_santander)).click();
    await this.driver.findElement(By.css(elements.industry_select_item(1))).click();
  }

  async fillBusinessInfoFashion(companyName, phoneNumber) {
    await this.driver.wait(until.elementLocated(By.css(elements.company_input_fashion)), 15000);
    await this.driver.findElement(By.css(elements.company_input_fashion)).sendKeys(companyName);
    await this.driver.findElement(By.css(elements.phone_input_fashion)).sendKeys(phoneNumber);
    await this.driver.findElement(By.css(elements.industry_select_fashion)).click();
    await this.driver.findElement(By.css(elements.industry_select_item(1))).click();
  }

  async clickWelcomeButton() {
    await this.driver.wait(until.elementLocated(By.css(elements.welcome_button_on_screen)), 30000);
    await this.driver.findElement(By.css(elements.welcome_button_on_screen)).click();
  }

  async waitForDashboard() {
    await this.driver.wait(until.urlContains('/info/overview'), 25000);
  }

  async getIconsText() {
    const parentElement = await this.driver.findElements(By.css(elements.icon_item_list));
    const foundTexts = await Promise.all(parentElement.map(element => element.getText()));
    return foundTexts;
  }
}

module.exports = RegistrationPage;
