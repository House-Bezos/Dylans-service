
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true}, { useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected');
});

  const productSchema = new mongoose.Schema({
    name:  String,
    rating: Number,
    numRatings: Number,
    prime: Boolean,
    price: Number,
    images: []
  });

// create a model from schema
const product = mongoose.model('products', productSchema);

module.exports = product;