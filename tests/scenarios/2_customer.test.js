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
   describe("Transaction", () => {
      it("[TC0014] Can see list transaction", () => {
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
      it("[TC0015] Can filter transaction", () => {
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
   describe("Withdrawl", () => {
      it("[TC0025] Can Withdrawl with valid data", () => {
         /* 
         1. Click button Withdrawl
         2. Fill field Withdrawl with valid data
         3. Click button "Withdraw"
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonWithdrawl);
         element.fillFilledXpath(customerPage.inputAmount, 100);
         element.clickXpath(customerPage.buttonWithdrawlAction);
         assert.shouldContainTextXpath(customerPage.depositMessage, "Transaction successful");
      });
      it("[TC0027] Can Withdrawl with negative number", () => {
         /* 
         1. Click button Withdrawl
         2. Fill field Withdrawl with negative number
         3. Click button "Withdraw"
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonWithdrawl);
         element.fillFilledXpath(customerPage.inputAmount, -10000);
         element.clickXpath(customerPage.buttonWithdrawlAction);
         assert.shouldContainTextXpath(customerPage.depositMessage, "Transaction Failed, Please input valid amount");
      });
      it("[TC0028] Can Withdrawl with amount more than balance", () => {
         /* 
         1. Click button Withdrawl
         2. Fill field Withdrawl with amount more than 1000000000000000000000000000000000000000000
         3. Click button "Withdraw"
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonWithdrawl);
         element.fillFilledXpath(customerPage.inputAmount, 1000000000000000000000000000000000000000000);
         element.clickXpath(customerPage.buttonWithdrawlAction);
         assert.shouldContainTextXpath(
            customerPage.depositMessage,
            "Transaction Failed. You can not withdraw amount more than the balance."
         );
      });
   });
   describe("Logout Customer", () => {
      it("[TC0029] Logout As Customer", () => {
         /* 
        1. Click button Logout
         */
         element.clickXpath(customerPage.buttonCustomerLoginPage);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
         element.fillSelectXpath(customerPage.selectCustomerLogin, 1);
         element.clickXpath(customerPage.buttonCustomerLogin);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomer);
         element.clickXpath(customerPage.buttonCustomerLogout);
         assert.shouldBeVisibleXpath(customerPage.assertionLoginCustomerPage);
      });
   });
});
