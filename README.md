# Exemplo de uso do Swagger no Node.js

Exemplo Swagger UI + Swagger Gen no Node.js

## Passo a Passo

1. Instale as dependências necessárias:

    ```bash
    npm install --save express body-parser swagger-ui-express
    npm install --save-dev swagger-autogen
    ```

2. Configure um arquivo de configuração pro swagger como feito no arquivo [swagger.js](src/config/swagger.js), **CONFERINDO** o número da porta da aplicação.

3. Adicione as seguintes linhas no seu arquivo raiz, seja o `app.js`, `index.js`:

    ```js
    const swaggerUi = require("swagger-ui-express");
    const swaggerFile = require("./swagger_output.json");

    app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    ```

4. Para documentar métodos que recebem body (normalmente os POSTs) indique um comentário como o feito na linha 9 do arquivo [albuns.routes.js](src/routes/album.routes.js#L9), **DEFININDO** a estrutura do objeto dentro do campo `properties` do comentário.

5. Para organizar cada controller no swagger você pode utilizar um comentário como o feito na linha 35 do arquivo [albuns.routes.js](src/routes/album.routes.js#L35).

6. Execute o seguinte comando **TODA VEZ** que desejar atualizar a documentação do Swagger, se preferir adicione ele no início do script `start` do [package.json](package.json)

    ```bash
    node ./src/config/swagger.js
    ```

7. Acesse o swagger na rota definida no arquivo raiz: <http://localhost:PORTA/swagger-ui> **(SUBSTITUA A PORTA)**

## Documentações

- [swagger-autogen](https://swagger-autogen.github.io/docs/getting-started/quick-start).
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express).
