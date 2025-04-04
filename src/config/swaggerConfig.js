const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Aluno API",
      version: "1.0.0",
      description: "API para gerenciamento de alunos",
    },
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = {
  swaggerUiExpress,
  specs,
};
