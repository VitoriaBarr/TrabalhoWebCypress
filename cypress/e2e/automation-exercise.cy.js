/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Automation Exercise", () => {
  it("Test Case 1: Cadastrar usuário", () => {
    const timestamp = new Date().getTime();

    cy.visit("https://automationexercise.com/test_cases");
    cy.get("a[href$=login]").click(); // encontrar um elemento
    //cy.contains("Signup").click(); // encontrar um elemento

    const signUpName = "Tester QA";

    cy.get('[data-qa="signup-name"]').type(signUpName);
    cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@mail.com`);
    cy.contains("button", "Signup").click();

    cy.get("input[type=radio]").check("Mrs");
    // cy.get('input[type=radio]').first().check()
    // cy.get('input[type=radio]').last().check()
    //cy.get('input[type=radio]').eq(1).check() // 0, 1, 2
    cy.get("[type=password]").type("12345", { log: false });

    cy.get('[data-qa="days"]').select("5");
    cy.get('[data-qa="months"]').select("November");
    cy.get('[data-qa="years"]').select("1993");

    cy.get("input[type=checkbox]#newsletter").check();
    cy.get("input[type=checkbox]#optin").check();

    cy.get('[data-qa="first_name"]').type("Cristiano");
    cy.get('[data-qa="last_name"]').type("Ronaldo");
    cy.get('[data-qa="company"]').type("Tigrinho Tabajara");
    cy.get('[data-qa="address"]').type("rua treze, n 14");
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type("Califórnia");
    cy.get('[data-qa="city"]').type("Los Angeles");
    cy.get('[data-qa="zipcode"]').type("90001");
    cy.get('[data-qa="mobile_number"]').type("111 222 333");

    cy.get('[data-qa="create-account"]').click();

    cy.url().should("includes", "account_created");
    // -> https://automationexercise.com/account_created

    cy.get('[data-qa="account-created"]').should("be.visible");

    cy.get('[data-qa="continue-button"]').click();

    cy.get("i.fa-user").parent().should("contain", signUpName);
  });

  it("Test Case 2:Login do usuário com e-mail e senha corretos", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("body").should("be.visible");
    cy.get("a[href$=login]").click();
    cy.contains("Login to your account").should("be.visible");

    cy.get('[data-qa="login-email"]').type("tester-1721346302730@mail.com");
    cy.get('[data-qa="login-password"]').type("12345", { log: false });

    cy.get('button[data-qa="login-button"]').click();

    cy.get("i.fa-user").parent().should("contain", "Tester QA");
  });

  it("Test Case 3:Login de usuário com e-mail e senha incorretos", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("body").should("be.visible");
    cy.get("a[href$=login]").click();
    cy.contains("Login to your account").should("be.visible");

    cy.get('input[data-qa="login-email"]').type("teste30@gmail.com");
    cy.get('input[data-qa="login-password"]').type("4legria");

    cy.get('button[data-qa="login-button"]').click();

    cy.contains("Your email or password is incorrect").should("be.visible");
  });

  it("Test Case 4:Sair do usuário", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("body").should("be.visible");
    cy.get("a[href$=login]").click();
    cy.contains("Login to your account").should("be.visible");

    cy.get('[data-qa="login-email"]').type("tester-1721346302730@mail.com");
    cy.get('[data-qa="login-password"]').type("12345", { log: false });

    cy.get('button[data-qa="login-button"]').click();
    cy.get("i.fa-user").parent().should("contain", "Tester QA");

    cy.get("a[href$=logout]").click();

    cy.url().should("contain", "login");
    cy.contains("Login to your account").should("be.visible");
  });

  it("Test Case 5:Registrar usuário com e-mail existente", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("a[href$=login]").click();

    cy.get('[data-qa="signup-name"]').type(`Tester QA`);
    cy.get('[data-qa="signup-email"]').type(`tester-1721346302730@mail.com`);
    cy.get('[data-qa="signup-button"]').click();

    cy.get(`.signup-form form p`)
      .should(`be.visible`)
      .and(`contain`, "Email Address already exist!");
  });

  it("Test Case 6:Formulário de contato", () => {
    cy.visit("https://automationexercise.com/");
    cy.contains(`Contact us`).click();

    cy.get(`.contact-form h2`)
      .should(`be.visible`)
      .and(`have.text`, `Get In Touch`);

    cy.get('[data-qa="name"]').type("testando");
    cy.get('[data-qa="email"]').type("teste30@gmail.com");
    cy.get('[data-qa="subject"]').type("Test Automation");
    cy.get('[data-qa="message"]').type("Learning Test Automation");

    cy.fixture("example.json").as("arquivo");
    cy.get('input[name="upload_file"]').selectFile("@arquivo");
    cy.get('[data-qa="submit-button"]').click();
    cy.get(".status").should(
      "have.text",
      "Success! Your details have been submitted successfully."
    );
  });

  it("Test Case 8:Verificar todos os produtos e a página de detalhes do produto", () => {
    cy.visit("https://automationexercise.com/");
    cy.contains(`Products`).click();

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
    cy.visit("https://automationexercise.com/");
    cy.contains(`Products`).click();

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
    cy.visit("https://automationexercise.com/");

    cy.get("input#susbscribe_email")
      .scrollIntoView()
      .type("tester-qa@gmail.com");

    cy.get("button#subscribe").click();

    cy.contains("You have been successfully subscribed!").should("be.visible");
  });

  it("Test Case 15: Place Order: Register before Checkout", () => {
    const timestamp = new Date().getTime();
    const nome = "Vitoria Barrocas";

    cy.visit("https://automationexercise.com");
    cy.get("[href$=login]").click();
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get("[data-qa=signup-email]").type(`vitoria${timestamp}@qa.com.br`);
    cy.get('[data-qa="signup-button"]').click();
    cy.get("input[type=radio]").eq(0).check();
    cy.get('[data-qa="password"]').type("5r4s15sd5f1", { log: false });
    cy.get("[data-qa=days]").select(19);
    cy.get('[data-qa="months"]').select(5);
    cy.get('[data-qa="years"]').select("2000");
    cy.get("input[type=checkbox]#newsletter").check();
    cy.get("input[type=checkbox]#optin").check();
    cy.get('[data-qa="first_name"]').type("Vitoria");
    cy.get('[data-qa="last_name"]').type("Barrocas");
    cy.get('[data-qa="company"]').type("Togyro Group");
    cy.get('[data-qa="address"]').type("XXXX");
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type("California");
    cy.get('[data-qa="city"]').type("Los Angeles");
    cy.get('[data-qa="zipcode"]').type("8789498");
    cy.get('[data-qa="mobile_number"]').type("378 98562-8781");
    cy.get('[data-qa="create-account"]').click();
    cy.get("b").should("contain", "Account Created!");
    cy.url().should("includes", "account_created");
    cy.get('[data-qa="account-created"]').should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
    cy.get("b").should("contain", nome);
    cy.contains("Add to cart").click();
    cy.contains("View Cart").click();
    cy.get(".btn-default.check_out").should("be.visible");
    cy.get(".btn-default.check_out").click();
    cy.get(":nth-child(2) > .heading").should("have.text", "Address Details");
    cy.get(":nth-child(4) > .heading").should("have.text", "Review Your Order");
    cy.get(".form-control").type("378 98562-8781");
    cy.get(".btn-default.check_out").click();
    cy.get('[data-qa="name-on-card"]').type(faker.person.fullName());
    cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber());
    cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV());
    cy.get('[data-qa="expiry-month"]').type(12);
    cy.get('[data-qa="expiry-year"]').type(2035);
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"]').should("be.visible");
    cy.get('[href *="delete"]').click();
    cy.get("b").should("contain", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  });
});
