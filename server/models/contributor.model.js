// import mongoose
const mongoose = require('mongoose')


const ContributorSchema = new mongoose.Schema({ //change NameSchema for each project
    // key names here, with values that are objects with validations like type and minlength
    name: {
        type: String,
        minlength: [3, "Contributor name must be at least 3 characters!"],
        required: [true, "Contributor name is required!"],
        unique: true
    },
    age: {
        type: Number,
        required: [true, "Contributor age is required"]
    },
    numPets: {
        type: Number,
        required: [true, "Number of Pets Rescued is required"]
    },
    description: {
        type: String,
        minlength: [3, "Description must be at least 3 characters!"],
        required: [true, "Description is required"]
    }
})





const Contributor = mongoose.model('contributor', ContributorSchema) //change Name, tableName and NameSchema for each project
//mongoose creates a table named ___ using instructions for ____ above

module.exports = Contributor //change Name for each project