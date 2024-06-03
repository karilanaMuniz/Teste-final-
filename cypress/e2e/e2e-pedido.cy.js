///<reference types= "cypress"/>

import login from './../fixtures/usuario.json'

describe('Testes de ponta a ponta de Pedido no SauceDemo', () => {

  beforeEach(() => {
    cy.login(login.usuario, login.senha)

  });

  it('Teste produto', () => {
    cy.addProdutoNome('Sauce Labs Onesie')
  });



  it('Deve fazer pedido de ponta a ponta', () => {
    //Adicionar pedido por nome
    cy.addProdutoNome('Sauce Labs Onesie')
    cy.addProdutoNome('Sauce Labs Bolt T-Shirt')

    //adicionar produtos no carrinho 
    /* Inicio 
     cy.get('.btn_inventory').first().click()
     cy.get('.btn_inventory').last().click()
     cy.get('.btn_inventory').eq(2).click()
       Fim */


    //adicionar produtos por posição
    cy.addProdutoPosicao(0)
    cy.addProdutoPosicao(5)


    //Adicionar produto por nome
    cy.get('[data-test="shopping-cart-link"] ').click()
    cy.get('[data—test="checkout]').click()

    //preencher cadastro ficha carrinho
    cy.preenchercadastro('Jessica', 'Pereira', '11222')


    // Finalizar carrinho 
    cy.get(' [data-test="finish"] ').click()
    cy.get(' [data—test="complete—header"] ').should(' contain', 'Thank you')

  });

});

