// import mongoose
const mongoose = require('mongoose')


const PetSchema = new mongoose.Schema({ //change NameSchema for each project
    // key names here, with values that are objects with validations like type and minlength
    name: {
        type: String,
        required: [true, "Contributor name is required!"]
    },
    imageUrl: {
        type: String,
        required: [true, "Please provide a URL to an image"]
    }
})





const Pet = mongoose.model('pet', PetSchema) //change Name, tableName and NameSchema for each project
//mongoose creates a table named ___ using instructions for ____ above

module.exports = Pet //change Name for each project