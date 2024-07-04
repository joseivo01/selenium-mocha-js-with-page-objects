const { By, until } = require('selenium-webdriver');

async function clearField(driver, locator) {
  const element = await driver.wait(until.elementLocated(locator), 10000);
  await driver.wait(until.elementIsVisible(element), 10000);
  await element.clear();
}

function generateString(base) {
  const baseUsername = base;
  const randomNumber = Math.floor(1000 + Math.random() * 9000468);
  return `${randomNumber}${baseUsername}`;
}

module.exports = {
  clearField,
  generateString
};
