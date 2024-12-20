export const buttonCustomerLoginPage = `//button[contains(text(),'Customer Login')]`;
export const assertionLoginCustomerPage = `//label[contains(text(),'Your Name')]`;
export const buttonCustomerLogin = `//button[contains(text(),'Login')]`;
export const selectCustomerLogin = `//select[@ng-model='custId']`;
export const assertionLoginCustomer = `//span[contains(text(),'Hermoine')]`;
export const buttonDeposit = `//button[contains(text(),'Deposit')]`;
export const inputAmount = `//input[@ng-model='amount']`;
export const buttonDepositAction = `//button[@type='submit' and contains(text(),'Deposit')]`;
export const depositMessage = `//span[@ng-show='message']`;
export const amountBalance = (amount) => `//strong[contains(text(),'${amount}')]`;
export const buttonTransaction = `//button[contains(text(),'Transactions')]`;
export const inputSearchStartDate = `//input[@ng-model='startDate']`;
export const inputSearchEndDate = `//input[@ng-model='end']`;
export const assertionSearchData = `//tbody//td[contains(text(),'Jan')]`;
export const buttonReset = `//button[contains(text(),'Reset')]`;
export const buttonWithdrawl = `//button[contains(text(),'Withdrawl')]`;
export const buttonWithdrawlAction = `//button[@type='submit' and contains(text(),'Withdraw')]`;
export const buttonCustomerLogout = `//button[contains(text(),'Logout')]`;
