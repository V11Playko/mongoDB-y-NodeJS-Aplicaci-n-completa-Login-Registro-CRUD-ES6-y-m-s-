const app = require("../src/routes/index.routes");
const nApp = require("../src/routes/notes.routes");
const request = require("supertest");

// Pruebas de conexion a index.routes

describe("GET /", () => {
  test("should respond with a 200 status code", async () => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("GET /about", () => {
  test("should respond with a 200 status code", async () => {
    request(app)
      .get("/about")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

// Pruebas de conexion a notes.routes

describe("GET /notes/add", () => {
  test("should respond with a 200 status code", async () => {
    request(app)
      .get("/notes/add")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("POST /notes/new-note", () => {
  test("should respond with a 200 status code", async () => {
    request(app)
      .post("/notes/new-note")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("GET /notes", () => {
  test("should respond with a 200 status code", async () => {
    request(app)
      .get("/notes")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("GET /notes/edit/:id", () => {
  test("should respond with a 200 status code", async () => {
    request(app)
      .get("/notes/edit/:id")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("PUT /notes/edit-note/:id", () => {
  test("should respond with a 200 status code", async () => {
    request(app)
      .put("/notes/edit-note/:id")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("DEL /notes/delete/:id", () => {
  test("should respond with a 200 status code", async () => {
    request(app)
      .del("/notes/delete/:id")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

//