const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./src/mockup/fruits.json");

app.get("/api/v1/fruits", (req, res) => {
  res.json({
    ...fruits,
    total: fruits.data.length,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
