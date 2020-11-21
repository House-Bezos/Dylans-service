const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const db = require('../database/database.js');

app.get('/api/relatedProducts/all', (req, res) => {
  db.find({})
  .then((data) => {
    if(!data) {
      throw data;
    } else {
      console.log('mongodb data accessed');
      res.status(200).send(data);
    }
  })
  .catch((data) => {
    console.log('error in api call');
    res.send('error getting data');
  });
});

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
