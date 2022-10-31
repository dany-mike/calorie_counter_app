const supertest = require("supertest");
const updateTotalCalories = require("../src/domain/updateTotalCalories.js");
const client = supertest(require("../src/app.js"));

const multiply = require("../src/helpers/math");

describe("Test the food", () => {
  const givenfood = {
    name: "apple",
    calories: 52,
    servingSize: "1 medium",
    numberOfServings: 2,
  };

  const expectedResponse = {
    totalCalories: 132,
  };

  test("The apple calories should be added in a given day total calories", () => {
    const givenDayTotalCalories = 28;
    const foodCalories = multiply(
      givenfood.calories,
      givenfood.numberOfServings
    );
    expect(foodCalories).toEqual(104);
    expect(updateTotalCalories(foodCalories, givenDayTotalCalories)).toEqual(
      132
    );
  });

  test("Call POST /food and return the given day total calories", async () => {
    const response = await client.post("/food").send(givenfood);
    expect(response.status).toBe(201);
    expect(response.text).toEqual(JSON.stringify(expectedResponse));
  });
});
