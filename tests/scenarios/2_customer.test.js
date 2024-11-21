/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as customerPage from "@tests/pages/customer.page";
import * as assert from "@helpers/assert";
import * as userData from "@tests/data/user.data";

beforeEach(() => {
   route.visit(ROUTES.login);
});
describe("Test Case Customer", () => {
   describe("Login Customer", () => {
      it.skip("[TC0002] Login as Customer", () => {
         /* 
        1. Click button "Customer Login"
        2. Choose customer
        3. Click button "Login"
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
      });
   });
   describe("Transaction", () => {
      it.skip("[TC0014] Can see list transaction", () => {
         /* 
        1. Click button transaction
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonTransaction);
      });
      it.skip("[TC0015] Can filter transaction", () => {
         /* 
        1. Click button transaction
        2. Fill field filter date
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonTransaction);
         element.fillFilledXpath(customerPage.inputSearchStartDate, userData.SEARCH_DATA_TRANSACTION.startDate);
         element.fillFilledXpath(customerPage.inputSearchEndDate, userData.SEARCH_DATA_TRANSACTION.endDate);
         assert.shouldBeVisibleXpath(customerPage.assertionSearchData);
      });
      it("[TC0017] Can reset transaction", () => {
         /* 
        1. Click button transaction
        2. Click button "Reset"
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonTransaction);
         element.clickXpath(customerPage.buttonReset);
      });
   });
});
