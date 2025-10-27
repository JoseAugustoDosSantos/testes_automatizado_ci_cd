| Comando                               | Uso                                    |
| ------------------------------------- | -------------------------------------- |
| `I.sendGetRequest(url)`               | Envia GET                              |
| `I.sendPostRequest(url, data)`        | Envia POST                             |
| `I.sendPutRequest(url, data)`         | Envia PUT                              |
| `I.sendDeleteRequest(url)`            | Envia DELETE                           |
| `I.seeResponseCodeIs(code)`           | Verifica status HTTP                   |
| `I.seeResponseCodeIsSuccessful()`     | Status 2xx                             |
| `I.seeResponseCodeIsClientError()`    | Status 4xx                             |
| `I.seeResponseCodeIsServerError()`    | Status 5xx                             |
| `I.seeResponseContainsJson(json)`     | Verifica JSON no corpo                 |
| `I.seeResponseContainsKeys(key)`      | Verifica chave existe no JSON          |
| `I.seeResponseContainsHeader(header)` | Verifica header da resposta            |
| `I.assertEqual(text, response.data)`  | Verifica texto no corpo da resposta    |
| `I.dontSee(text, response.data)`      | Verifica que texto não existe no corpo |
| `I.assertJsonSchema(response.data,require("../schema/"+arquivo+".json")) )`      | Verifica se o schema está correto |