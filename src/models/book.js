const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    author:{
        type:String,
        required: true
    },
    pubYear:{
        type:Number,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    ownerId:{
        type:String,
        required: true
    },
    currentHolderId:{
        type:String,
        required: true
    }
});

module.exports=mongoose.model('Book', bookSchema);