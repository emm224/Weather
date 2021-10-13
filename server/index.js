const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const config = require('../config.js');
// const router = require('./routes.js');

let port = process.env.PORT || 3000;

let app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.json());
app.use(morgan('dev'));



// api que r y to get current weather
app.get('/places/current/:city', (req, res) => {
  var cityName = req.params.city;
  console.log(req.params.city)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${config.API_key}&units=imperial`
  axios.get(url)
    .then(result => {
      res.send(result.data)
    })
    .catch(err => {
      res.status(404).send('could not grab API data')
    })
});

// api query to get 5 day weather forecast
app.get('/places/forecast/:city', (req, res) => {
  var cityName = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${config.API_key}&units=imperial`
  axios.get(url)
    .then(result => {
      res.send(result.data)
    })
    .catch(err => {
      console.log('error')
      res.status(404).send('could not grab API data')
    })
});

// api query to get hourly weather
app.get('/places/current/:city', (req, res) => {

});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});