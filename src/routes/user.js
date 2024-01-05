const express = require('express');
const userSchema = require('../models/user')

const router = express.Router();

//Routes

//Create User
router.post('/users', (req, res) => {
    const user = userSchema(req.body);

    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

//Find All
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

//Find By Id
router.get('/users/:id', (req, res) => {
    const {id} = req.params;

    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

//Login api
router.get('/users/login/:email/:password', (req, res) => {
    const {email, password} = req.params;

    userSchema
    .find()
    // .then((data) => res.json(data.filter(user=>user.email=== email)))
    .then((data) => {
        let foundUser = data.filter(usuario => usuario.email === email)

        // res.json({message: "Found", value: foundUser})
        
        if (!foundUser){
            res.json({message:"User not Found1", value: null})
        }
        
        foundUser[0].password == password ? res.json({message: "Access Allowed", value: foundUser}) : res.json({message:"User or Password Wrong", value: null})
    })
    .catch((error) => res.json({mesage: error}))
})

//Update By Id
router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, surname, age, cel, email,password} = req.body;

    userSchema
    .updateOne({ _id:id}, {$set :{name, surname, age, cel, email,password}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

//delete By Id
router.delete('/users/:id', (req, res) => {
    const {id} = req.params;

    userSchema
    .deleteOne({ _id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

module.exports = router;