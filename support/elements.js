module.exports = {
    // Geral locators
    sign_up_button: 'button[type="submit"].signup-button',
    login_button: 'button[type="submit"].login-button',
    welcome_button_on_screen: 'button.welcome-screen-content-button',

    // General First Page
    first_name: 'input[formcontrolname="firstName"]',
    last_name: 'input[formcontrolname="lastName"]',
    email_input: 'input[formcontrolname="email"]',
    password_input: 'input[formcontrolname="password"].ng-untouched',
    confirm_password_input: 'input[formcontrolname="confirmPass"].ng-untouched',

    icon_item_list: '.icons__links .icons__title',
    industry_select_item: (item_number) => { return `div[role="listbox"] > :nth-child(${item_number})`},
    // Especific First page locators - Fashion
    company_input_fashion: 'input.ng-tns-c139-8',
    phone_input_fashion: 'input.ng-tns-c139-12',
    

    industry_select_fashion: 'input.mat-autocomplete-trigger',
    // Especific First page locators - Santander
    company_input_santander: 'input[type="text"].ng-invalid',
    phone_input_santander: 'input[pephoneinputfilter][type="text"]',

    industry_select_santander: 'form.form-table > :nth-child(1) > div.form-background-wrapper > :nth-child(5) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)',
    VAT_number_input: 'form.form-table > :nth-child(1) > div.form-background-wrapper > :nth-child(8) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)',
  };
  // form.form-table > :nth-child(1) > div.form-background-wrapper > :nth-child(8) > :nth-child(1) > :nth-child(2) > input[type="text"]