const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Creator'Z API.",
      version: "1.0.0",
      description: "The Creator'Z e-learning platform main API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://creatorz.herokuapp.com",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
