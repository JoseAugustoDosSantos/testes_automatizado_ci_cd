
Feature: Login de usuário
  como usuário cadastrado quero conseguir fazer um login no sistema

@Login
Scenario: Login com sucesso
  Given que tenho um usuário cadastrado
  When quando coloco email e senha cadastrado
  Then o usuário deve conseguir acessar o sistema
