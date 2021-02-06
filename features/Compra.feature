Feature: Compra

  Scenario: Realizar compra com mais de um produto
    Given que realizei o login
    When adiciono dois produtos ao carrinho
    And acesso a tela de carrinho
    And vou para a tela de checkout
    And informo os dados do usuário
    And confirmo os dados do usuário
    And finalizo a compra
    Then a compra será realizada com sucesso

  Scenario: Validar valor total
    Given que realizei o login
    When adiciono todos os produtos ao carrinho
    And acesso a tela de carrinho
    And vou para a tela de checkout
    And informo os dados do usuário
    And confirmo os dados do usuário
    Then serei redirecionado para a tela de overview
    And terei o valor total da compra
