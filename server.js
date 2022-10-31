require("dotenv").config();
const port = process.env.PORT;
const app = require("./src/app");

app.listen(port || 3000, () => {
  console.log(`Listening on port ${port}`);
});
