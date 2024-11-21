/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as assert from "@helpers/assert";
import * as userData from "@tests/data/user.data";

beforeEach(() => {
   route.visit(ROUTES.home);
});
describe("Test Case Login", () => {
   it("Login with user doesn't exist", () => {
      element.clickXpath(loginPage.buttonLogin);
      cy.wait(500);
      element.fillFilledXpath(loginPage.usernameField, userData.INVALID_REGISTER.username);
      element.fillFilledXpath(loginPage.passwordField, userData.INVALID_REGISTER.password);
      element.clickXpath(loginPage.buttonLoginUser);
      assert.shouldAlertText("User does not exist.");
   });
   it("Login without fill field username", () => {
      element.clickXpath(loginPage.buttonLogin);
      cy.wait(500);
      element.fillFilledXpath(loginPage.usernameField, userData.VALID_REGISTER.username);
      element.clickXpath(loginPage.buttonLoginUser);
      assert.shouldAlertText("Please fill out Username and Password.");
   });
   it("Login without fill field password", () => {
      element.clickXpath(loginPage.buttonLogin);
      cy.wait(500);
      element.fillFilledXpath(loginPage.passwordField, userData.VALID_REGISTER.password);
      element.clickXpath(loginPage.buttonLoginUser);
      assert.shouldAlertText("Please fill out Username and Password.");
   });
   it.only("Login with valid user", () => {
      element.clickXpath(loginPage.buttonLogin);
      cy.wait(500);
      element.fillFilledXpath(loginPage.usernameField, Cypress.env("username"));
      element.fillFilledXpath(loginPage.passwordField, Cypress.env("password"));
      element.clickXpath(loginPage.buttonLoginUser);
      cy.wait(2500);
      assert.shouldBeVisibleXpath(loginPage.assertLogin);
      assert.shouldContainTextXpath(loginPage.assertLogin, `Welcome ${Cypress.env("username")}`);
   });
});
