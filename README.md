### README

#### CommerceOS Registration Tests

This repository contains automated tests for the CommerceOS registration process using Selenium WebDriver and Mocha framework.

### Prerequisites

Before running the tests, make sure you have Node.js installed on your machine.

### Installation

Clone the repository and navigate into the project directory:

```bash
git clone <#######>
cd <########>
```

Install dependencies using npm:

```bash
npm install
```

### Running Tests

To execute the tests, run the following command in your terminal:

```bash
npx mocha ./test/registration_test.js
```

### Project Structure

- **`/test/registration_test.js`**: Contains the Mocha test cases for CommerceOS registration.
- **`/support/elements.js`**: Contains element locators used in the tests.
- **`/support/utils.js`**: Utility functions like `clearField` and `generateString`.
- **`/support/pages/registration_page.js`**: Page object for interacting with registration page elements.

### Dependencies

- **`selenium-webdriver`**: JavaScript bindings for Selenium WebDriver.
- **`mocha`**: Test framework for running JavaScript tests.
- **`chai`** (devDependency): Assertion library for test assertions.

### Test Cases

- **Test Case 1: Validate apps for value "fashion"**
  - Opens the registration page for "fashion", fills user information, registers the account, and validates expected apps.

- **Test Case 2: Validate apps for value "santander"**
  - Opens the registration page for "santander", fills user information, registers the account with additional business information, and validates expected apps.

### Note

Ensure that you have Firefox or Chrome installed and configured to run the tests with Selenium WebDriver.

### Package.json

```json
{
  "name": "commerceos-registration-tests",
  "version": "1.0.0",
  "description": "Automated tests for CommerceOS registration process",
  "main": "index.js",
  "scripts": {
    "test": "mocha ./test/registration_test.js"
  },
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "selenium-webdriver": "^4.22.0",
    "mocha": "^10.5.1"
  },
  "devDependencies": {
    "chai": "^5.1.1"
  }
}
```

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

- Selenium WebDriver
- Mocha
- Node.js

### Contact

For issues or inquiries, please contact [joseivosobrinho](joseivosobrinho@gmail.com).

---

Adjust the placeholders (`#######`, `#######`, `José ivo`, `joseivosobrinho@gmail.com`) with appropriate values specific to your project. This README provides an overview of the project structure, how to install dependencies, run tests, and the dependencies used in the project.
