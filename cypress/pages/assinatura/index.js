class Assinatura {
  preencherFormularioDeAssinatura(email) {
    cy.get("input#susbscribe_email")
      .scrollIntoView()
      .should("be.visible")
      .type(email);

    cy.get("button#subscribe").click();

    cy.contains("You have been successfully subscribed!").should("be.visible");
  }
}

export default new Assinatura();
