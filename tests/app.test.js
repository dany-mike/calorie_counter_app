require("dotenv").config();
const request = require("supertest");
const app = require("../src/app");

describe("Test the root path", () => {
  const port = 3000;
  let appServer = app.listen(port, () =>
    console.log(`Listening on port ${port}`)
  );

  beforeEach(function () {
    delete require.cache[require.resolve("../src/app")];
  });

  afterEach(function (done) {
    appServer.close(done);
  });

  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });

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
