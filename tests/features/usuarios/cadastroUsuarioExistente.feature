
Feature: cadastrando um usuário já existente
  como usuário quero receber um aviso quando tentar cadastrar um usuario existente

@Usuarios
Scenario: cadastrando usuáro já existente no sistema
  Given que eu tenho um usuário casdastrado
  When tento cadastrar um usuário com email já existente
  Then o sistema deve me retornar uma mensagem de erro de email já existente
