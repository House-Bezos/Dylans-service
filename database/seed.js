const mongoose = require('mongoose');
let faker = require('faker');
const db = require('./database.js');



let seedData = [];
for (var i = 0; i <= 100; i++) {
  var document = {};
  document.name = faker.name.findName();
  document.rating = Math.floor(Math.random() * Math.floor(11));
  document.numRatings = faker.random.number();
  document.prime = faker.random.boolean();
  document.price = faker.commerce.price();
  document.images = [faker.image.food(), faker.image.food(), faker.image.food()];
  seedData.push(document);
}
db.insertMany(seedData)
.then((err) => {
  if(err) {
    console.log('error seeking dumby data', err);
  } else {
    console.log('Seed Data Success!');
  }
});