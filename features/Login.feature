Feature: Login
    
  Scenario: Login com usuario bloqueado
    Given que eu acessei a tela de Login
    When eu preencho os dados do usuário bloqueado
    And confirmo o login
    Then é apresentada uma mensagem de usuario bloqueado
