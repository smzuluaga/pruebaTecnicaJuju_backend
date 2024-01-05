const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user')
const bookRoutes = require('./routes/book')
const cors = require('cors')
// const bodyParser = require('body-parser') // NO ES NECESARIO

const app = express();
const port = process.env.PORT || 9000;

// middelwares
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', bookRoutes);
app.use(cors());

app.options('*', cors({
    allowedHeaders:['Content-Type', 'Authorization']
}));
// app.use(bodyParser.json());  // NO ES NECESARIO 
// app.use(bodyParser.urlencoded({extended: true}))  // NO ES NECESARIO

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my bookstore API");
})

// MongoDB Conection
mongoose
    .connect('mongodb+srv://zuluaga777:Ponny778@cluster0.mvjnzhc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log("Conectadito a MongoDB Atlas"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log('Server listening on port',port));


//