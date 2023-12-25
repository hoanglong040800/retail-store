import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Retail Store API",
    description: "Retail Store description",
  },

  servers: [
    {
      url: "http://localhost:5000",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const outputFile = "../generated/swagger-output.json";
const endpointFiles = ["../modules/**/*.routes.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointFiles, doc);
