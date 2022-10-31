require("dotenv").config();
const request = require("supertest");
const app = require("../src/app");

describe("Test the root path", () => {
  test("It says Hello World!", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello World!");
        done();
      });
  });
});
