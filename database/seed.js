const mongoose = require('mongoose');
let faker = require('faker');
const db = require('./database.js');

console.log(db);

let seedData = [];
for (var i = 0; i <= 17; i++) {
  var document = {};
  document.name = faker.name.findName();
  document.rating = Math.floor(Math.random() * Math.floor(11));
  document.numRatings = faker.random.number();
  document.prime = faker.random.boolean();
  document.price = faker.commerce.price();
  document.images = [faker.image.food(), faker.image.food(), faker.image.food()];
  seedData.push(document);
}
//db.dropDatabase();
db.insertMany(seedData).then(() => {
  mongoose.disconnect();
});

//