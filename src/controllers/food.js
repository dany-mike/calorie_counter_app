const updateTotalCalories = require("../domain/updateTotalCalories");
const multiply = require("../helpers/math");

module.exports = {
  post: async (req, res) => {
    const currentCaloriesAmount = 28;

    const caloriesToAdd = multiply(
      req.body.calories,
      req.body.numberOfServings
    );

    const totalCalories = updateTotalCalories(
      caloriesToAdd,
      currentCaloriesAmount
    );

    res.status(201).json({ totalCalories });
  },
};
