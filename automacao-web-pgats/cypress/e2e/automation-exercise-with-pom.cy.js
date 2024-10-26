/*/// <reference types="cypress" />
// pom - page object model

import cadastro from "../pages/cadastro/index";
import login from "../pages/login/index";
import menu from "../pages/menu/index";
import { faker } from "@faker-js/faker";

// HOOKS
// ACOES QUE EXECUTAM
// ANTES DE TODOS OU ANTES DE CADA TESTE - before e beforeEach
// DEPOIS DE TODOS OU DEPOIS DE CADA TESTE - after e afterEach
// beforeAll e afterAll

describe("Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Test Case 1: Cadastrar usuário", () => {
    menu
      .irParaLoginCadastro()
      .preencherFormulario()
      .verificarSeCadastroFoiConcluido();
  });

  it("Test Case 2:Login do usuário com e-mail e senha corretos", () => {
    cy.get("body").should("be.visible");
    menu.irParaLoginCadastro();
    cy.contains("Login to your account").should("be.visible");

    login.preencherLogin("tester-1721346302730@mail.com", "12345");

    cy.get("i.fa-user").parent().should("contain", "Tester QA");
  });

  it("Test Case 3:Login de usuário com e-mail e senha incorretos", () => {
    cy.get("body").should("be.visible");
    menu.irParaLoginCadastro();
    cy.contains("Login to your account").should("be.visible");

    login.preencherLogin("teste30@gmail.com", "4legria");

    cy.contains("Your email or password is incorrect").should("be.visible");
  });

  it("Test Case 4:Sair do usuário", () => {
    cy.get("body").should("be.visible");
    menu.irParaLoginCadastro();
    cy.contains("Login to your account").should("be.visible");

    login.preencherLogin("tester-1721346302730@mail.com", "12345");

    cy.get("i.fa-user").parent().should("contain", "Tester QA");

    cy.get("a[href$=logout]").click();

    cy.url().should("contain", "login");
    cy.contains("Login to your account").should("be.visible");
  });

  it("Test Case 5:Registrar usuário com e-mail existente", () => {
    menu.irParaLoginCadastro();

    cadastro.iniciarCadastro(`tester-1721346302730@mail.com`);

    cy.get(`.signup-form form p`)
      .should(`be.visible`)
      .and(`contain`, "Email Address already exist!");
  });

  it("Test Case 6:Formulário de contato", () => {
    menu
      .irParaContato()
      .preencherFormularioDeContato(
        "testando",
        "teste30@gmail.com",
        "Test Automation",
        "Learning Test Automation",
        "example.json"
      );
  });

  it("Test Case 8:Verificar todos os produtos e a página de detalhes do produto", () => {
    menu.irParaProdutos();
    menu.irPara(menu.menus.PRODUTOS);

    cy.url().should("contain", "products");
    cy.get(".title").should("be.visible").and("contain", "All Products");

    cy.get(".single-products")
      .should("be.visible")
      .and("have.length.at.least", 1)
      .first()
      .parent()
      .contains("View Product")
      .click();

    cy.get(".product-information > h2").should("be.visible");
    cy.get(".product-information p").should("be.visible").and("have.length", 4);
    cy.get(".product-information span span").should("be.visible");
  });

  it("Test Case 9:Pesquisar produto", () => {
    menu.irParaProdutos();

    cy.url().should("contain", "products");
    cy.get(".title").should("be.visible").and("contain", "All Products");

    cy.get("input#search_product").type("Shirt");
    cy.get("button#submit_search").click();

    cy.get(".title").should("be.visible").and("contain", "Searched Products");

    cy.get(".single-products")
      .should("be.visible")
      .and("have.length.at.least", 1);
  });

  it("Test Case 10:Verificar assinatura na página inicial", () => {
    menu.irParaHome().preencherFormularioDeAssinatura("tester-qa@gmail.com");
  });

  it("Test Case 15: Fazer pedido: Registrar antes de finalizar a compra", () => {
    cadastro.preencherFormulario();

    menu
      .irParaPedido()
      .adicionarAoCarrinho()
      .irParaCheckout()
      .preencherInformacoesPagamento()
      .deletarConta();
  });
});
*/
