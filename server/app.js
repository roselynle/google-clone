const express = require("express");
const app = express();
app.listen(5000, () => console.log("listening at 5000"));

const cors = require("cors");

app.get("/", (req, res) => res.send("Hello World"));

// import data
const pizzaPlacesData = require("./data");

// to get the 10 results on the page
app.get("/pizzaresult", (req, res) => res.send(pizzaPlacesData));

// function getRandomNumber(min, max) {
//     let step1 = max - min + 1;
//     let step2 = Math.random()*step1;
//     let result = Math.floor(step2) + min;

//     return pizzaPlaces[result]}

// app.get('/random', (req, res) => res.send(getRandomNumber(0, pizzaPlaces.length)));

// app.get("/random", (req, res) => res.send("../client/random.html"));

//route to get the results for a particular index
app.get("/pizzaresult/:id", (req, res) => {
    const resultId = parseInt(req.params.id);
    res.send(pizzaPlacesData[resultId - 1]);
});

module.exports = app;
