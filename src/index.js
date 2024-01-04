const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user')

const app = express();
const port = process.env.PORT || 9000;

// middelware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
})

// MongoDB Conection
mongoose
    .connect('mongodb+srv://zuluaga777:Ponny778@cluster0.mvjnzhc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log("Conectadito a MongoDB Atlas"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log('Server listening on port',port));


//