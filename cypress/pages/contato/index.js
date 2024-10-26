class Contato {
  preencherFormularioDeContato(nome, email, assunto, mensagem, arquivo) {
    cy.get(`.contact-form h2`)
      .should(`be.visible`)
      .and(`have.text`, `Get In Touch`);

    cy.get('[data-qa="name"]').type(nome);
    cy.get('[data-qa="email"]').type(email);
    cy.get('[data-qa="subject"]').type(assunto);
    cy.get('[data-qa="message"]').type(mensagem);

    cy.fixture(arquivo).as("arquivo");
    cy.get('input[name="upload_file"]').selectFile("@arquivo");

    cy.get('[data-qa="submit-button"]').click();

    cy.get(".status").should(
      "have.text",
      "Success! Your details have been submitted successfully."
    );
  }
}

export default new Contato();
