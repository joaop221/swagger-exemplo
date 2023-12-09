const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./src/routes/album.routes");
const port = 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", routes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});