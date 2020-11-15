const mongoose = require('mongoose');
let faker = require('faker');
const db = require('./database.js');

console.log(db);

let seedData = [];
for (var i = 0; i <= 10; i++) {
  var document = {};
  document.name = faker.name.findName();
  document.rating = Math.floor(Math.random() * Math.floor(11));
  document.numRatings = faker.random.number();
  document.prime = faker.random.boolean();
  document.price = faker.commerce.price();
  document.images = [faker.image.food(), faker.image.food(), faker.image.food()];
  seedData.push(document);
}

//mongoose.connect('mongodb://localhost/FEC');

db.insertMany(seedData);
// .then((err, res) => {
//   if(err) {
//     console.log('error seeding dummy data');
//   } else {
//     console.log('Seed Data Success!');
//
//   }
mongoose.disconnect();