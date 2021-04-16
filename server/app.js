const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Welcome to Google Clone"));

// import data
// const pizzaPlacesData = require("./data");

// to get the 10 results on the page
// app.get("/pizzaresult", (req, res) => res.send(pizzaPlacesData));

//route to get the results for a particular index
// app.get("/pizzaresult/:id", (req, res) => {
//     const resultId = parseInt(req.params.id);
//     res.send(pizzaPlacesData[resultId - 1]);
// });

function randomSearch(data){
    length = data.length
    randomIndex = Math.floor(Math.random() * length)
    return data[randomIndex]
}

const access_key = '814b1b36a00558b7fea1a36edf0004a7';
app.get('/search/:query', (req, res) => {
    const query = req.params.query;
    const url = `http://api.serpstack.com/search?access_key=${access_key}&type=web&query=${query}`;
    axios.get(url)
    .then(function (response) {
        res.status(200).send({body: (response.data.organic_results, 10)})
    })
    .catch(console.warn)
})

app.get('/lucky/:query', (req, res) => {
    const query = req.params.query;
    const url = `http://api.serpstack.com/search?access_key=${access_key}&type=web&query=${query}`;
    axios.get(url)
    .then(function (response) {
        res.status(200).send({body: randomSearch(response.data.organic_results, 10)})
    })
    .catch(console.warn)
})

module.exports = app;
