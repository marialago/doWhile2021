const express = require("express");
const server = express();
//configurar pasta publica
server.use(express.static("public"));
//utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});
//configurar caminhos da aplicação/ pag inicial
// req: requisição,pedido / res: resposta
server.get("/", (req, res) => {
  return res.render("index.html", {title: "Um titulo"});
});
server.get("/create-point", (req, res) => {
  return res.render("cadastro.html");
});
//ligar servidor
server.listen(3000);