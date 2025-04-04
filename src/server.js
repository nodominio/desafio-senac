// Importação de dependências
const express = require("express");
const fs = require("fs");
const path = require("path");
const { swaggerUiExpress, specs } = require("./config/swaggerConfig");

// Cria o servidor express
const app = express();
// Configura a porta do servidor
const port = 3000;

// Configura o Swagger
app.use("api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

// Redireciona o cliente da página root para /api-docs
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// Carregamente dinâmico das rotas
fs.readdirSync(path.join(__dirname, "routes")).forEach((file) => {
  const route = require(`./routes/${file}`);
  app.use("/api", route);
});

// Inicia o servidor e faz com que ele aguarde requisções na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 🚀.`);
});
