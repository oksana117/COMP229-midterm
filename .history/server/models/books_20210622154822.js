let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);

 db.books.updateOne({"Title":"Brave New World","Price":"25.99","Author":"Aldous Huxley","Genre":"Science fiction"})