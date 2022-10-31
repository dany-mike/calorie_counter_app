const Router = require("express").Router;
const router = new Router();
const foodController = require("../controllers/food");

router.post("/", foodController.post);

module.exports = router;
