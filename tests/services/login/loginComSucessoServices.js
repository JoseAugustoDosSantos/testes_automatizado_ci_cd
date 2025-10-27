const { I } = inject();
let numRandom = Math.round(Math.random() * 99999);

module.exports = {
  async sendPostCadastro(body) {
    return I.sendPostRequest("/usuarios", body);
  },

  async sendPostLogin(body) {
    return I.sendPostRequest("/login", body);
  },

  getBody: () => ({
    nome: "Fulano da Silva",
    email: "beltrano" + numRandom + "@qa.com.br",
    password: "teste",
    administrador: "true",
  }),

  validaSchema(response, arquivo) {
    I.assertJsonSchema(
      response.data,
      require("../../schema/login/" + arquivo + ".json")
    );
  },

  getBodyLogin: () => ({
    email: "beltrano" + numRandom + "@qa.com.br",
    password: "teste",
  }),
};
