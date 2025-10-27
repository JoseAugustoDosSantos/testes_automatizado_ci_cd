const { I } = inject();
const service = require("../../services/usuarios/cadastroUsuarioServices.js");
let body, response;

When("coloco dados validos", async () => {
  body = service.getBody();
  response = await service.sendPostCadastro(body);
});

Then("o cadastro e feito com sucesso", () => {
  I.seeResponseCodeIs(201);
  service.validaSchema(response, "cadastroUsuarioSchema");
  I.assertEqual("Cadastro realizado com sucesso", response.data.message);
  I.seeResponseContainsKeys(["_id"]);
});
