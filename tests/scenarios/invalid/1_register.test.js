/// <reference types="cypress" />

import * as element from "@helpers/element";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as registerPage from "@tests/pages/register.page";
import * as assert from "@helpers/assert";
import * as userData from "@tests/data/user.data";

beforeEach(() => {
   route.visit(ROUTES.home);
});
describe("Test Case Register", () => {
   it("Register with user exist", () => {
      element.clickXpath(registerPage.buttonRegister);
      cy.wait(500);
      element.fillFilledXpath(registerPage.usernameField, userData.INVALID_REGISTER.username);
      element.fillFilledXpath(registerPage.passwordField, userData.INVALID_REGISTER.password);
      element.clickXpath(registerPage.buttonRegisterUser);
      assert.shouldAlertText("This user already exist.");
   });
   it("Register without fill field username", () => {
      element.clickXpath(registerPage.buttonRegister);
      cy.wait(500);
      element.fillFilledXpath(registerPage.usernameField, userData.VALID_REGISTER.username);
      element.clickXpath(registerPage.buttonRegisterUser);
      assert.shouldAlertText("Please fill out Username and Password.");
   });
   it("Register without fill field password", () => {
      element.clickXpath(registerPage.buttonRegister);
      cy.wait(500);
      element.fillFilledXpath(registerPage.passwordField, userData.VALID_REGISTER.password);
      element.clickXpath(registerPage.buttonRegisterUser);
      assert.shouldAlertText("Please fill out Username and Password.");
   });
   it("Register with valid user", () => {
      element.clickXpath(registerPage.buttonRegister);
      cy.wait(500);
      const username = userData.VALID_REGISTER.username;
      element.fillFilledXpath(registerPage.usernameField, username);
      element.fillFilledXpath(registerPage.passwordField, userData.VALID_REGISTER.password);
      element.clickXpath(registerPage.buttonRegisterUser);
      assert.shouldAlertText("Sign up successful.");
   });
});
