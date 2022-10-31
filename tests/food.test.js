const supertest = require("supertest");

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
    totalCalories: 104,
  };

  test("The apple calories should be added in a given day total calories", () => {
    const givenDayTotalCalories = 40;
    const foodCalories = multiply(food.calories, food.numberOfServings);
    expect(foodCalories).toBe(52);
    expect(addDailyTotalCalories(foodCalories, givenDayTotalCalories)).toBe(
      132
    );
  });

  test("Call POST /food and return the given day total calories", async () => {
    const response = await client.post("/food").send(givenfood);
    expect(response.status).toBe(201);
    expect(response.text).toEqual(JSON.stringify(expectedResponse));
  });
});
