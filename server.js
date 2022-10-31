const app = require("./src/app");
const port = process.env.PORT;

app.listen(port || 3000, () => {
  console.log(`Listening on port ${port}`);
});
