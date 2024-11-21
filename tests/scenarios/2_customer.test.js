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
      it("[TC0002] Login as Customer", () => {
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
   describe("Deposit", () => {
      it("[TC0021] Can deposit with valid data", () => {
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
         element.clickXpath(customerPage.buttonDeposit);
         element.fillFilledXpath(customerPage.inputAmount, 10000);
         element.clickXpath(customerPage.buttonDepositAction);
         assert.shouldContainTextXpath(customerPage.depositMessage, "Deposit Successful");
      });
      it("[TC0023] Can deposit with negative number", () => {
         /* 
        1. Click button deposit
        2. Fill field deposit with negative number
        3. Click button "Deposit"
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonDeposit);
         element.fillFilledXpath(customerPage.inputAmount, -10000);
         element.clickXpath(customerPage.buttonDepositAction);
         assert.shouldContainTextXpath(customerPage.depositMessage, "Deposit Failed, Please input valid amount");
      });
      it("[TC0024] Can deposit with amount more than 1000000000000000000000000000000000000000000", () => {
         /* 
        1. Click button deposit
        2. Fill field deposit with amount more than 1000000000000000000000000000000000000000000
        3. Click button "Deposit"
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonDeposit);
         element.fillFilledXpath(customerPage.inputAmount, 1000000000000000000000000000000000000000000);
         element.clickXpath(customerPage.buttonDepositAction);
         assert.shouldContainTextXpath(customerPage.depositMessage, "Deposit Successful");
         assert.shouldContainTextXpath(
            customerPage.amountBalance(parseFloat(1000000000000000000000000000000000000000000) + parseFloat(5096)),
            Math.round(parseFloat(1000000000000000000000000000000000000000000) + parseFloat(5096)).toLocaleString(
               "fullwide",
               { useGrouping: false }
            )
         );
      });
   });
});
