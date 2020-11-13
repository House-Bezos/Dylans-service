const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const db = require('../database/database.js');


app.get('/relatedProducts/all', (req, res) => {
  console.log('get All related Products');
  res.status(200).send();
});

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})