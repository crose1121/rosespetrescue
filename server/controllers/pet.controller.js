const modelFile = 'pet.model'; //change the modelFile for each project

// import model and save as a variable

const Pet = require(`../models/${modelFile}`) //change Name for each project

// module.exports.mongooseCommands here
module.exports.createPet = (req,res) => {
    Pet.create(req.body)
        .then(newPet=>{
            console.log("Results after creating new Pet: ",newPet)
            res.json({results: newPet})
        })
        .catch(err=>{
            console.log("Error when trying to create a new Pet: ",err)
            res.json(err)
        })
}

module.exports.getAllPets = (req,res) => {
    Pet.find().sort({type:1})
        .then(allPets=>{
            console.log("Response when getting all Pets --> ",allPets)
            res.json({results: allPets})
        })
        .catch(err=>{
            console.log("Error on back end when getting all Pets: ",err)
            res.json(err)
        })
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedPet=>{
            console.log("Response when updating a Pet: ",updatedPet)
            res.json({results: updatedPet})
        })
        .catch(err=>{
            console.log("Error on back end when updating a single Pet: ",err)
            res.json(err)
        })
}

module.exports.deletePet = (req,res) => {
    Pet.remove({_id: req.params.id})
        .then(deletedPet=>{
            console.log("Response when deleting a Pet: ",deletedPet)
            res.json({results:deletedPet})
        })
        .catch(err=>{
            console.log("Error on back end when trying to delete Pet: ",err)
            res.json(err)
        })
}

module.exports.getOnePet = (req,res) => {
    Pet.findOne({_id:req.params.id})
        .then(singlePet=>{
            console.log("Response when getting a single Pet: ",singlePet)
            res.json({results: singlePet})
        })
        .catch(err=>{
            console.log("Error on back end when getting single Pet: ",err)
            res.json(err)
        })
}