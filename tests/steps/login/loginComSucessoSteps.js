/*
Step-by-step:

1°) 
- montar o body da request de cadastro 
- enviar a requisição de cadastro de usuário com o body construído anterioermente 

2°) 
- monter o body da request de login 
- fazer a requisição de login com o body construído anteriormente

3°) fazer as validações:
- de statuscode
- de schema
- de mensagem de sucesso
- de chave "authorization" presente
*/

const { I } = inject();
const service = require("../../services/login/loginComSucessoServices.js");
let body, response;

Given("que tenho um usuário cadastrado", async () => {
  body = service.getBody();
  response = await service.sendPostCadastro(body);
});

When("quando coloco email e senha cadastrado", async () => {
  body = service.getBodyLogin();
  response = await service.sendPostLogin(body);
});

Then("o usuário deve conseguir acessar o sistema", () => {
  I.seeResponseCodeIs(200);
  service.validaSchema(response, "loginComSucessoSchema");
  I.assertEqual("Login realizado com sucesso", response.data.message);
});
