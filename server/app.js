const express = require("express");
const app = express();
app.listen(5000, () => console.log("listening at 5000"));

const cors = require("cors");

app.get("/", (req, res) => res.send("Hello World"));

const pizzaPlaces = [
    { name: "Dominos", url: "https://www.dominos.co.uk" },
    { name: "Pizza Hut", url: "https://www.https://www.pizzahut.co.uk/" },
    { name: "Papa Johns", url: "https://www.papajohns.co.uk/" },
    { name: "Pizza Express", url: "https://www.pizzaexpress.com/" },
    { name: "Fat Pizza", url: "https://www.thefatpizza.co.uk/" },
    { name: "Pizza 2 Night", url: "https://www.pizza2night.co.uk/?l=en" },
    { name: "Farmhouse Pizza", url: "https://www.farmhousepizza.co.uk/" },
    { name: "Wood & Stone", url: "https://woodandstone-coulsdon.co.uk/" },
    {
        name: "Whyteleafe Pizza & Grill",
        url: "https://whyteleafepizzaandgrill.com/",
    },
    { name: "Tops Pizza", url: "https://topspizza.co.uk/" },
];
// to get the 10 results on the page
app.get("/pizzaresult", (req, res) => res.send("../client/searchresults.html"));

// function getRandomNumber(min, max) {
//     let step1 = max - min + 1;
//     let step2 = Math.random()*step1;
//     let result = Math.floor(step2) + min;

//     return pizzaPlaces[result]}

// app.get('/random', (req, res) => res.send(getRandomNumber(0, pizzaPlaces.length)));

app.get("/random", (req, res) => res.send("../client/random.html"));

module.exports = app;
