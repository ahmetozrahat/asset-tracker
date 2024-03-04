const express = require("express");
const app = express();
const port = 3000;

const assetsRoute = require("./src/routes/assets.route");

app.use("/assets", assetsRoute);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
