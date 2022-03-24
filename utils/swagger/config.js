const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.2",
    servers: [
      {
        url: "/api/v1",
      },
    ],
    info: {
      description: "The Creator'Z e-learning platform main API",
      version: "1.0.0",
      title: "Creator'Z API.",
      contact: {
        email: "apiteam@swagger.io",
      },
    },
    tags: [
      {
        name: "auth",
        description: "Provide authentication and authorization",
      },
      {
        name: "learner",
        description: "Handle learner related operations",
      },
    ],
    paths: {
      "/auth/learner/signup": {
        post: {
          tags: ["auth"],
          summary: "Create a learner account",
          description: "Create a learner account",
          operationId: "learnerSignup",
          responses: {
            200: {
              description: "Successful operation",
              content: {
                "application/json": {
                  message: "Learner was registered successfully!",
                },
              },
            },
            409: {
              description: "Failed! Email is already in use!",
            },
          },
          requestBody: {
            description: "Create a new learner account",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Learner",
                },
              },
            },
          },
        },
      },
      "/auth/learner/signin": {
        post: {
          tags: ["auth"],
          summary: "Signin to a learner account",
          description: "Signin to a learner account",
          operationId: "learnerSignin",
          responses: {
            200: {
              description: "Successful operation",
            },
            404: {
              description: "Learner Not found.",
            },
            401: {
              description: "Unauthorized. Invalid Password!",
            },
          },
          requestBody: {
            description: "Login to a learner account",
            required: true,
            content: {
              "application/json": {
                schema: {
                  properties: {
                    email: {
                      type: "string",
                      example: "foulen@fouleni",
                      required: true,
                    },
                    password: {
                      type: "string",
                      example: "p1ssw0rd",
                      required: true,
                    },
                  },
                  type: "object",
                },
              },
            },
          },
        },
      },
      "/auth/teacher/signup": {
        post: {
          tags: ["auth"],
          summary: "Create a teacher account",
          description: "Create a teacher account",
          operationId: "teacherSignup",
          responses: {
            200: {
              description: "Successful operation",
              content: {
                "application/json": {
                  message: "Teacher was registered successfully!",
                },
              },
            },
            409: {
              description: "Failed! Email is already in use!",
            },
          },
          requestBody: {
            description: "Create a new teacher account",
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Learner",
                },
              },
            },
          },
        },
      },
      "/auth/teacher/signin": {
        post: {
          tags: ["auth"],
          summary: "Login to a Teacher account",
          description: "Login to a Teacher account",
          operationId: "loginTeacher",
          security: {
            bearerAuth: [],
          },
          responses: {
            200: {
              description: "Successful operation",
            },
            404: {
              description: "Teacher Not found.",
            },
            401: {
              description: "Unauthorized. Invalid Password!",
            },
          },
          requestBody: {
            description: "Login to an Teacher account",
            required: true,
            content: {
              "application/json": {
                schema: {
                  properties: {
                    email: {
                      type: "string",
                      example: "foulen@fouleni",
                      required: true,
                    },
                    password: {
                      type: "string",
                      example: "p1ssw0rd",
                      required: true,
                    },
                  },
                  type: "object",
                },
              },
            },
          },
        },
      },
      "/auth/admin/create": {
        post: {
          tags: ["auth"],
          summary: "Create an admin account",
          description: "Create an admin account",
          operationId: "CreateAdmin",
          security: [
            {
              bearerAuth: [],
            },
          ],
          responses: {
            200: {
              description: "Successful operation",
            },
            403: {
              description: "No token provided!",
            },
          },
          requestBody: {
            description: "Create new admin account",
            required: true,
            content: {
              "application/json": {
                schema: {
                  properties: {
                    email: {
                      type: "string",
                      example: "super@mail.com",
                      required: true,
                    },
                    password: {
                      type: "string",
                      example: "super@password",
                      required: true,
                    },
                  },
                  type: "object",
                },
              },
            },
          },
        },
      },
      "/auth/admin/signin": {
        post: {
          tags: ["auth"],
          summary: "Login to an admin account",
          description: "Login to an admin account",
          operationId: "loginAdmin",
          security: {
            bearerAuth: [],
          },
          responses: {
            200: {
              description: "Successful operation",
            },
            404: {
              description: "Admin Not found.",
            },
            401: {
              description: "Unauthorized. Invalid Password!",
            },
          },
          requestBody: {
            description: "Login to an admin account",
            required: true,
            content: {
              "application/json": {
                schema: {
                  properties: {
                    email: {
                      type: "string",
                      example: "super@mail.com",
                      required: true,
                    },
                    password: {
                      type: "string",
                      example: "super@password",
                      required: true,
                    },
                  },
                  type: "object",
                },
              },
            },
          },
        },
      },
      "/admin/approve/{user}/{_id}": {
        put: {
          tags: ["auth"],
          summary: "Approve user Accounts",
          description: "Approve user Accounts",
          operationId: "ApproveAccount",
          security: [
            {
              bearerAuth: [],
            },
          ],
          responses: {
            200: {
              description: "Successful operation",
            },
            403: {
              description: "No token provided!",
            },
          },
          parameters: [
            {
              in: "path",
              name: "user",
              schema: { type: String, required: true },
              description: "type of user to approve",
              default: "learner",
            },
            {
              in: "path",
              name: "_id",
              schema: { type: String, required: true },
              description: "id of user to be approved",
              default: "",
            },
          ],
        },
      },
    },
    components: {
      schemas: {
        Learner: {
          properties: {
            email: {
              type: "string",
              example: "foulen@fouleni",
              required: true,
            },
            password: {
              type: "string",
              example: "p1ssw0rd",
              required: true,
            },
            fname: {
              type: "string",
              example: "foulen",
              required: true,
            },
            lname: {
              type: "string",
              example: "fouleni",
              required: true,
            },
            dob: {
              type: "date",
              example: "10-10-2010",
              required: true,
            },
            phone: {
              type: "number",
              example: "0987654321",
              required: true,
            },
            address: {
              type: "object",
              example: {
                country: "Tunisia",
                city: "Tunis",
                street: "",
                postcode: 5555,
              },
              required: true,
            },
          },
          type: "object",
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
