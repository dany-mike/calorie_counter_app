const Router = require("express").Router;
const router = new Router();
const helloController = require("../controllers/hello");

router.get("/", helloController.get);

module.exports = router;
