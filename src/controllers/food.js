const updateTotalCalories = require("../domain/updateTotalCalories");
const multiply = require("../helpers/math");

module.exports = {
  post: async (req, res) => {
    const caloriesAmount = 28;

    const caloriesToAdd = multiply(
      req.body.calories,
      req.body.numberOfServings
    );

    const updatedTotalCalories = updateTotalCalories(caloriesToAdd, caloriesAmount);

    res.status(201).json({ updatedTotalCalories });
  },
};
