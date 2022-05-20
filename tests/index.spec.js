const app = require("../src/routes/index.routes.js");
const request = require("supertest");

describe("GET /about", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/about").send();
    console.log(response);
  });
});
