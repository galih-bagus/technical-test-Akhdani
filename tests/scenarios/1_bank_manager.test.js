/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as bankManagerPage from "@tests/pages/bankManager.page";
import * as assert from "@helpers/assert";
import * as userData from "@tests/data/user.data";

beforeEach(() => {
   route.visit(ROUTES.login);
});
describe("Test Case Bank Manager", () => {
   describe("Login Bank Manager", () => {
      it("[TC0002] Login as Bank Manager", () => {
         /* 
        1. Click button "Bank Manager Login"
         */
         element.clickXpath(bankManagerPage.buttonBankManagerLogin);
         assert.shouldBeVisibleXpath(bankManagerPage.buttonAddCustomerPage);
      });
   });
   describe("Add Customer", () => {
      it("[TC0003] Create data customer", () => {
         /* 
         1. Click button "Add Customer"
         2. Fill field mandatory
         3. Click button "Add Customer"
         */
         element.clickXpath(bankManagerPage.buttonBankManagerLogin);
         assert.shouldBeVisibleXpath(bankManagerPage.buttonAddCustomerPage);
         element.clickXpath(bankManagerPage.buttonAddCustomerPage);
         element.fillFilledXpath(bankManagerPage.inputFirstName, userData.VALID_CUSTOMER.firstName);
         element.fillFilledXpath(bankManagerPage.inputLastName, userData.VALID_CUSTOMER.lastName);
         element.fillFilledXpath(bankManagerPage.inputPostalCode, userData.VALID_CUSTOMER.postalCode);
         element.clickXpath(bankManagerPage.buttonAddCustomer);
         assert.shouldAlertContains("Customer added successfully with customer id");
      });
      it("[TC0004] Create data customer with data duplicate", () => {
         /* 
         1. Click button "Add Customer"
         2. Fill field mandatory with data duplicate
         3. Click button "Add Customer"
         */
         element.clickXpath(bankManagerPage.buttonBankManagerLogin);
         assert.shouldBeVisibleXpath(bankManagerPage.buttonAddCustomerPage);
         element.clickXpath(bankManagerPage.buttonAddCustomerPage);
         element.fillFilledXpath(bankManagerPage.inputFirstName, userData.DUPLICATE_CUSTOMER.firstName);
         element.fillFilledXpath(bankManagerPage.inputLastName, userData.DUPLICATE_CUSTOMER.lastName);
         element.fillFilledXpath(bankManagerPage.inputPostalCode, userData.DUPLICATE_CUSTOMER.postalCode);
         element.clickXpath(bankManagerPage.buttonAddCustomer);
         assert.shouldAlertText("Please check the details. Customer may be duplicate.");
      });
      it("[TC0005] Create data customer without fill field mandatory", () => {
         /* 
         1. Click button "Add Customer"
         2. Click button "Add Customer"
         */
         element.clickXpath(bankManagerPage.buttonBankManagerLogin);
         assert.shouldBeVisibleXpath(bankManagerPage.buttonAddCustomerPage);
         element.clickXpath(bankManagerPage.buttonAddCustomerPage);
         element.clickXpath(bankManagerPage.buttonAddCustomer);
         assert.shouldInvokeXpath(bankManagerPage.inputFirstName, "Please fill out this field.");
      });
   });
   describe("Open Account", () => {
      it("[TC0006] Create data account", () => {
         /* 
         1. Click button "Open Account"
         2. Select customer
         3. Select Currency
         4. Click button "Process"
         */
         element.clickXpath(bankManagerPage.buttonBankManagerLogin);
         element.clickXpath(bankManagerPage.buttonAddOpenAccountPage);
         element.fillSelectXpath(bankManagerPage.selectFieldCustomer, 1);
         element.fillSelectXpath(bankManagerPage.selectFieldCurrency, "Dollar");
         element.clickXpath(bankManagerPage.buttonAddOpenAccount);
         assert.shouldAlertContains("Account created successfully with account Number");
      });
      it("[TC0007] Create data account without fill field mandatory", () => {
         /* 
         1. Click button "Open Account"
         2. Select Currency
         3. Click button "Process"
         */
         element.clickXpath(bankManagerPage.buttonBankManagerLogin);
         element.clickXpath(bankManagerPage.buttonAddOpenAccountPage);
         element.fillSelectXpath(bankManagerPage.selectFieldCurrency, "Dollar");
         assert.shouldInvokeXpath(bankManagerPage.selectFieldCustomer, "Please select an item in the list.");
      });
   });
});
