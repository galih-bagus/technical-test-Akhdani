export function shouldBeVisible(selector) {
   cy.get(selector).should("be.visible");
}

export function shouldNotBeVisible(selector) {
   cy.get(selector).should("not.be.visible");
}

export function shouldContainText(selector, value) {
   cy.get(selector).should("contain.text", value);
}

export function shouldContain(selector, ...args) {
   cy.get(selector).should("contain", ...args);
}

export function shouldContainValue(selector, value) {
   cy.get(selector).should("have.value", value);
}

export function shouldExist(selector) {
   cy.get(selector).should("exist");
}

export function shouldInvoke(selector) {
   cy.get(selector).invoke("prop", "validationMessage").should("equal", "Please fill out this field.");
}

export function shouldBeVisibleXpath(selector) {
   cy.xpath(selector).should("be.visible");
}

export function shouldNotBeVisibleXpath(selector) {
   cy.xpath(selector).should("not.be.visible");
}

export function shouldContainTextXpath(selector, value) {
   cy.xpath(selector).should("contain.text", value);
}

export function shouldContainXpath(selector, ...args) {
   cy.xpath(selector).should("contain", ...args);
}

export function shouldContainValueXpath(selector, value) {
   cy.xpath(selector).should("have.value", value);
}

export function shouldExistXpath(selector) {
   cy.xpath(selector).should("exist");
}

export function shouldInvokeXpath(selector, value) {
   cy.xpath(selector).invoke("prop", "validationMessage").should("equal", value);
}

export function shouldAlertText(expected) {
   cy.on("window:alert", (actual) => {
      expect(actual).to.eq(expected);
   });
}

export function shouldAlertContains(expected) {
   cy.on("window:alert", (actual) => {
      expect(actual).to.contain(expected);
   });
}

export function shouldContainPropertyXpath(selector, value) {
   cy.xpath(selector).should("have.property", value);
}
