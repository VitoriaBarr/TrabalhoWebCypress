import { faker } from "@faker-js/faker";

class Pedido {
  adicionarAoCarrinho() {
    cy.contains("Add to cart").click();
    cy.contains("View Cart").click();
    return this;
  }

  irParaCheckout() {
    cy.get(".btn-default.check_out").should("be.visible").click();
    cy.get(":nth-child(2) > .heading").should("have.text", "Address Details");
    cy.get(":nth-child(4) > .heading").should("have.text", "Review Your Order");
    return this;
  }

  preencherInformacoesPagamento() {
    cy.get(".form-control").type("378 98562-8781");
    cy.get(".btn-default.check_out").click();
    cy.get('[data-qa="name-on-card"]').type(faker.person.fullName());
    cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber());
    cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV());
    cy.get('[data-qa="expiry-month"]').type(12);
    cy.get('[data-qa="expiry-year"]').type(2035);
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"]').should("be.visible");
    return this;
  }

  deletarConta() {
    cy.get('[href*="delete"]').click();
    cy.get("b").should("contain", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new Pedido();
