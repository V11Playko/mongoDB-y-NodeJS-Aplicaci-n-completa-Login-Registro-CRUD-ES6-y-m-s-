const app = require("../src/routes/index.routes");
const request = require("supertest");

describe("GET /", () => {
  test("should respond with a 200 status code", async () => {
    const response = request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
    console.log(response);
  });
});

describe("GET /about", () => {
  test("should respond with a 200 status code", async () => {
    const response = request(app)
      .get("/about")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
    console.log(response);
  });
});
