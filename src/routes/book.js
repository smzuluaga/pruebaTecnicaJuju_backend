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

//Find By Id
router.get('/books/:id', (req, res) => {
    const {id} = req.params;

    bookSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

//Update By Id
router.put('/books/:id', (req, res) => {
    const {id} = req.params;
    const {author, pubYear ,title,state,ownerId,currentHolderId} = req.body;

    bookSchema
    .updateOne({ _id:id}, {$set :{author, pubYear ,title,state,ownerId,currentHolderId}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

//delete By Id
router.delete('/books/:id', (req, res) => {
    const {id} = req.params;

    bookSchema
    .deleteOne({ _id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})



module.exports = router;