const updateTotalCalories = (caloriesToAdd, currentCaloriesAmount) => {
  return (currentCaloriesAmount += caloriesToAdd);
};

module.exports = updateTotalCalories;
