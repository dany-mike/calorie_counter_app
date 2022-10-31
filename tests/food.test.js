// const request = require("supertest");
// const app = require("../src/app");

describe("Test the food", () => {
  const food = {
    name: "apple",
    calories: 52,
    servingSize: "1 medium",
    numberOfServings: 1,
  };

  test("One apple should be added in the user total calories", (done) => {
    const dailyTotal = 40
    const foodCalories = multiply(food.calories, food.numberOfServings)
    expect(foodCalories).toBe(52);
    expect(addDailyTotalCalories(foodCalories, dailyTotal)).toBe(92)
  });
});
