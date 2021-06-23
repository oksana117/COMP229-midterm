// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/details', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    res.render('books/details', {title: 'books',books: ''})

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/details', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let newBook = Book({
        "Title": req.body.title,
        "price": req.body.price,
         "Author": req.body.Author,
         "published": req.body.published
     });

     Book.create(newBook, (err, Book) =>{
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {
             // refresh the book list
             res.redirect('/book-list');
         }

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;
