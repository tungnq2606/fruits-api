const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./src/mockup/fruits.json");
const foods = require("./src/mockup/foods.json");
const snacks = require("./src/mockup/snacks.json");
const drinks = require("./src/mockup/drinks.json");
const best_seller = require("./src/mockup/best-seller.json");

app.get("/api/v1/fruits", (req, res) => {
  res.json({
    ...fruits,
    total: fruits.data.length,
  });
});
app.get("/api/v1/foods", (req, res) => {
  res.json({
    ...foods,
    total: foods.data.length,
  });
});
app.get("/api/v1/drinks", (req, res) => {
  res.json({
    ...drinks,
    total: drinks.data.length,
  });
});
app.get("/api/v1/snacks", (req, res) => {
  res.json({
    ...snacks,
    total: snacks.data.length,
  });
});
app.get("/api/v1/best-seller", (req, res) => {
  res.json({
    ...best_seller,
    total: best_seller.data.length,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
