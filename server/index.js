const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//const db = require('../database/database.js');

app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})