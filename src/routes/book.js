const express = require('express');
const bookSchema = require('../models/book')


const router = express.Router();


// CreateBook
router.post('/books', (req,res) => {
    const book = bookSchema(req.body);

    book
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
})

//FindAll
router.get('/books', (req,res) => {

    bookSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))

})



module.exports = router;