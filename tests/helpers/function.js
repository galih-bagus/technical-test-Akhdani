import * as element from "@helpers/element";

export function login(username, password) {
  element.fillFilledXpath(loginPage.usernameField, username);
  element.fillFilledXpath(loginPage.passwordField, password);
}

export function getDateTime(){
  const dateNow = new Date().getTime();
  return dateNow;
}