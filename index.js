const express = require("express");
const server = express();
server.use(express.static("public"));
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});
server.get("/", (req, res) => {
  return res.render("index.html", {title: "Um titulo"});
});
server.get("/create-point", (req, res) => {
  return res.render("cadastro.html");
});
server.listen(3000);