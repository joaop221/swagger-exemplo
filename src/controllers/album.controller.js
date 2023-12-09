async function listar(req, res) {
    //O objeto "req" representa a solicitação HTTP com propriedades como: parameters, body, HTTP headers.
    const listaDeAlbuns = [];
    listaDeAlbuns.push("Album A");
    listaDeAlbuns.push("Album B");
    // O objeto "res" representa a resposta HTTP que express envia quando recebe uma solicitação HTTP.
    res.send(listaDeAlbuns);
  }
  
  async function buscarPorId(req, res) {
    // "req.params" é um objeto que contém propriedades mapeadas para os “parâmetros” da rota nomeada, obtemos o ID neste caso.
    const id = req.params.id;
    res.send("Album XYZ " + id);
  }
  
  async function buscarPorNome(req, res) {
    // obtemos o nome neste caso.
    const nomeParam = req.params.nomeParam;
    res.send("Album XYZ " + nomeParam);
  }
  
  async function criarAlbum(req, res, next) {
    try {
      const album = req.body;
      res.json(album);
    } catch (error) {
      next(error);
    }
  }
  
  module.exports = {
    listar,
    buscarPorId,
    buscarPorNome,
    criarAlbum,
  };
  