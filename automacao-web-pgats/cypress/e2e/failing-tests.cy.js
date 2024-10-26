/*describe("Cadastrar entradas e saídas com bugs", () => {
  it("Cadastrar uma nova transação de entrada - falha 1", () => {
    cy.visit("https://devfinance-agilizei.netlify.app");

    const descricao = "Mesada";

    cy.contains("Nova Transação").click();
    cy.get("#description").type("Mesada");
    cy.get("#amount").type(100);
    cy.get("#date").type("2023-02-01");

    cy.contains("Salvar").click();

    cy.get(`#data-table tbody tr`).should("have.length.at.least", 1);
    cy.get("tbody tr").contains("td.description", "Mesada").should("exist");
    cy.get(".description").should("have.text", "Mesada");
    cy.get(".income").should("contain", "100,00");
    cy.get(".date").should("contain", "01/02/2023");
  });

  it("Cadastrar uma nova transação de entrada - falha 2", () => {
    cy.visit("https://devfinance-agilizei.netlify.app");

    cy.contains("Nova Transação").click();
    cy.get("#description").type("Mesada");
    cy.get("#amount").type(100);
    cy.get("#date").type("2023-02-01");

    cy.contains("Salvar").click();

    cy.get("tbody tr").should("have.length", 1);
  });

  it("Cadastrar uma nova transação de entrada - falha 3", () => {
    cy.visit("https://devfinance-agilizei.netlify.app");
    cy.contains("Nova Transação").click();
    cy.get("#description").type("Mesada");
    cy.get("#amount").type(100);
    cy.get("#date").type("2023-02-01");

    cy.contains("Salvar").click();

    cy.get("tbody tr").should("have.length", 1);
  });

  it("Cadastrar uma nova transação de entrada - falha 4", () => {
    cy.visit("https://devfinance-agilizei.netlify.app");

    cy.contains("Nova Transação").click();
    cy.get("#description").type("Mesada");
    cy.get("#amount").type(100);
    cy.get("#date").type("2023-02-01");

    cy.contains("Salvar").click();

    cy.get("tbody tr").should("have.length", 1);
  });

  it("Cadastrar uma nova transação de entrada - falha 5", () => {
    cy.visit("https://devfinance-agilizei.netlify.app");

    cy.contains("Nova Transação").click();
    cy.get("#description").type("Mesada");
    cy.get("#amount").type(100);
    cy.get("#date").type("2023-02-01");

    cy.contains("Salvar").click();

    cy.get("tbody tr").should("have.length", 1);
  });

  it("Cadastrar uma nova transação de entrada - falha 6", () => {
    // it.skip é para pular um teste específico
    cy.visit("https://devfinance-agilizei.netlify.app");

    cy.contains("Nova Transação").click();
    cy.get("#description").type("Mesada");
    cy.get("#amount").type(100);
    cy.get("#date").type("2023-02-01");

    cy.contains("Salvar").click();

    cy.get("tbody tr").should("have.length", 1);
  });
});
*/
