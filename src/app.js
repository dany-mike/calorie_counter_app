const express = require("express");
const app = express();

app.use(express.json());

app.use("/", require("./routes/hello"));
app.use("/food", require("./routes/food"));

module.exports = app;
