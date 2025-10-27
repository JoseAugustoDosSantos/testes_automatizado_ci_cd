const { I } = inject();
const service = require("../../services/usuarios/cadastroUsuarioExistenteServices.js");
let body, response;

Given("que eu tenho um usuário casdastrado", async () => {
  body = service.getBody();
  await service.sendPostCadastro(body);
});

When("tento cadastrar um usuário com email já existente", async () => {
  response = await service.sendPostCadastro(body);
});

Then(
  "o sistema deve me retornar uma mensagem de erro de email já existente",
  () => {
    I.seeResponseCodeIs(400);
    service.validaSchema(response, "cadastroUsuarioExistenteSchema");
    I.assertEqual("Este email já está sendo usado", response.data.message);
  }
);
