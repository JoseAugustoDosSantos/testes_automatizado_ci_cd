
Feature: cadastrando um usuário
  como usuário quero conseguir fazer um cadastro no sistema

@Usuarios
Scenario: cadastro com sucesso
  When coloco dados validos
  Then o cadastro e feito com sucesso
