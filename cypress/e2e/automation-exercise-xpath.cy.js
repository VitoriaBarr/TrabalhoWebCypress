/*describe("Automation Exercise", () => {
  it("Test Case 1: Cadastrar usuário", () => {
    require("cypress-xpath");
    const timestamp = new Date().getTime();

    cy.visit("https://automationexercise.com/test_cases");
    cy.xpath("//a[contains(@href, 'login')]").click(); // encontrar um elemento

    const signUpName = "Tester QA";

    cy.xpath('//*[@data-qa="signup-name"]').type(signUpName);
    cy.xpath(`//*[@data-qa="signup-email"]`).type(
      `tester-${timestamp}@mail.com`
    );
    cy.xpath("//button[contains(text(), 'Signup')]").click();

    // radio ou checkboxes -> check
    cy.xpath("//input[@type='radio' and @value='Mrs']").check();
    cy.xpath("//input[@type='password']").type("12345", { log: false });

    cy.xpath('//*[@data-qa="days"]').select("5");
    cy.xpath('//*[@data-qa="months"]').select("November");
    cy.xpath('//*[@data-qa="years"]').select("1993");

    cy.xpath("//input[@type='checkbox' and @id='newsletter']").check();
    cy.xpath("//input[@type='checkbox' and @id='optin']").check();

    cy.xpath('//*[@data-qa="first_name"]').type("Cristiano");
    cy.xpath('//*[@data-qa="last_name"]').type("Ronaldo");
    cy.xpath('//*[@data-qa="company"]').type("Tigrinho Tabajara");
    cy.xpath('//*[@data-qa="address"]').type("rua treze, n 14");
    cy.xpath('//*[@data-qa="country"]').select("United States");
    cy.xpath('//*[@data-qa="state"]').type("Califórnia");
    cy.xpath('//*[@data-qa="city"]').type("Los Angeles");
    cy.xpath('//*[@data-qa="zipcode"]').type("90001");
    cy.xpath('//*[@data-qa="mobile_number"]').type("111 222 333");

    cy.xpath('//*[@data-qa="create-account"]').click();

    cy.url().should("include", "account_created");
    cy.xpath('//*[@data-qa="account-created"]').should("be.visible");

    cy.xpath('//*[@data-qa="continue-button"]').click();

    cy.xpath("//i[@class='fa fa-user']").parent().should("contain", signUpName);
  });
});
*/
