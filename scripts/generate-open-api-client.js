const request = require("request-promise");
const { readFileSync, writeFileSync } = require("fs");

const SWAGGER_GENERATOR_3_API_URL =
  "https://generator3.swagger.io/api/generate";

function readConfiguration(configPath) {
  return new Promise((resolve, reject) => {
    try {
      const content = readFileSync(configPath);
      resolve(JSON.parse(content));
    } catch (error) {
      reject(error);
    }
  });
}

function payload(configuration) {
  return {
    spec: configuration,
    lang: "typescript-angular",
    type: "CLIENT",
    codegenVersion: "V3",
    options: {
      additionalProperties: {
        usePromises: true
      }
    }
  };
}

function createRequest(payload) {
  return {
    method: "POST",
    uri: SWAGGER_GENERATOR_3_API_URL,
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      ...payload
    }),
    responseType: "buffer",
    encoding: "binary"
  };
}

function generateOpenApiClient() {
  const configPath = "./config/open-api.json";
  readConfiguration(configPath)
    .then(configuration => request(createRequest(payload(configuration))))
    .then(response =>
      writeFileSync("./generated.zip", response, { encoding: "binary" })
    );
}

generateOpenApiClient();
