require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
const data = require("./games.json");

app.use(cors());

function findGameByYear(year) {
  return data.filter((game) => game.year >= year || !year);
}

// Endpoints
app.get("/", (req, res) => {
  res.json("You are on the home page!");
});

app.get("/games", (req, res) => {
  const games = findGameByYear(req.query.year);
  res.json(games);
});

// Last Line of Code
app.listen(PORT, console.log(`App is now RUNNING on PORT: ${PORT}`));
