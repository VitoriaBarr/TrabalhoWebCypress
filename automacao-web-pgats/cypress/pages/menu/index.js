import cadastro from "../cadastro";
import contato from "../contato";
import assinatura from "../assinatura";
import pedido from "../pedido";

class Menu {
  menus = {
    PRODUTOS: "Products",
    CONTATO: "Contact us",
    HOME: "Home",
  };

  irParaProdutos() {
    cy.contains(this.menus.PRODUTOS).click();
  }

  irParaLoginCadastro() {
    cy.contains("Signup").click();
    return cadastro;
  }

  irPara(menu) {
    cy.contains(menu).click();
  }

  irParaContato() {
    cy.contains(this.menus.CONTATO).click();
    return contato;
  }

  irParaHome() {
    cy.contains("Home").click();
    return assinatura;
  }

  irParaPedido() {
    return pedido;
  }
}

export default new Menu();
