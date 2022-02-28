const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Creator'z platform main API.",
      description: "",
    },
    servers: ["https://localhost:5000"],
  },
  apis: ["server.js", "*/routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerDocs };
