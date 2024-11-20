export function get(selector) {
  return cy.get(selector);
}

export function getXpath(selector) {
  return cy.xpath(selector);
}

export function fillFilled(selector, value) {
  return cy.get(selector).type(value).should("have.value", value);
}

export function fillFilledXpath(selector, value) {
  return cy.xpath(selector).type(value).should("have.value", value);
}

export function fillSelect(selector, value) {
  return cy.get(selector).select(value).should("have.value", value);
}

export function fillSelectXpath(selector, value) {
  return cy.xpath(selector).select(value).should("have.value", value);
}

export function click(selector, ...args) {
  return cy.get(selector).click(...args);
}

export function clickXpath(selector, ...args) {
  return cy.xpath(selector).click(...args);
}

export function fillFilledXpathSearch(selector, value) {
  return cy.xpath(selector).type(value + "{enter}");
}

export function fillFilledSearch(selector, value) {
  return cy.get(selector).type(value + "{enter}");
}

export function clearFilledXpath(selector) {
  return cy.xpath(selector).clear();
}

export function clearFilled(selector) {
  return cy.get(selector).clear();
}
