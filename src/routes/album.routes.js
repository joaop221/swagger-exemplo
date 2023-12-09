const express = require("express");
const router = express.Router();
const albunsController = require("../controllers/album.controller");

router.get("/", albunsController.listar);
router.post(
  "/",
  albunsController.criarAlbum
  /*  #swagger.parameters['album'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          nome: {
            type: "string",          
          },
          artista: {
            type: "string"
          },
          anoLancamento: {
            type: "integer",          
          },
        },
        required: ["nome", "artista", "anoLancamento",]
      },
  } */
);
router.get("/:id", albunsController.buscarPorId);
router.get("/nome/:nomeParam", albunsController.buscarPorNome);

router.use(
    "/albuns",
    router
    // #swagger.name = 'albuns-controller'
    // #swagger.description = 'Albuns Controller.'
    // #swagger.tags = ['Albuns']
  );

module.exports = router;
