class Cadastro {
  preencherFormulario() {
    const timestamp = new Date().getTime();

    cy.contains("Signup").click();
    const signUpName = "Tester QA";

    Cypress.env("signUpName", signUpName);

    cy.get('[data-qa="signup-name"]').type(Cypress.env("signUpName"));
    cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@mail.com`);
    cy.contains("button", "Signup").click();

    cy.get("input[type=radio]").check("Mrs");
    cy.get("input[type=radio]").eq(1).check();

    cy.get("[type=password]").type("1234", { log: false });

    cy.get('[data-qa="days"]').select(19);
    cy.get('[data-qa="months"]').select(5);
    cy.get('[data-qa="years"]').select("2000");

    cy.get('input[type="checkbox"]#newsletter').check();
    cy.get('input[type="checkbox"]#optin').check();

    cy.get('[data-qa="first_name"]').type("Vitoria");
    cy.get('[data-qa="last_name"]').type("Barrocas");
    cy.get('[data-qa="company"]').type("Inter Miami");
    cy.get('[data-qa="address"]').type("Boulevar Street, 704");
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type("Texas");
    cy.get('[data-qa="city"]').type("Lousiana");
    cy.get('[data-qa="zipcode"]').type("16202-002");
    cy.get('[data-qa="mobile_number"]').type("+5518991585752");

    cy.get('[data-qa="create-account"]').click();

    cy.url().should("includes", "account_created");
    //https://automationexercise.com/account_created
    cy.get('[data-qa="account-created"]').should("be.visible");
    cy.get('[data-qa="continue-button"]').click();

    return this;
  }

  iniciarCadastro(usuario) {
    cy.get('[data-qa="signup-name"]').type(`Tester QA`);
    cy.get('[data-qa="signup-email"]').type(usuario);
    cy.get('[data-qa="signup-button"]').click();

    return this;
  }

  verificarSeCadastroFoiConcluido() {
    cy.get("i.fa-user").parent().should("contain", Cypress.env("signUpName"));

    return this;
  }
}

export default new Cadastro();
