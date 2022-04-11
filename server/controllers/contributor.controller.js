const modelFile = 'contributor.model'; //change the modelFile for each project

// import model and save as a variable

const Contributor = require(`../models/${modelFile}`) //change Name for each project

// module.exports.mongooseCommands here
module.exports.createContributor = (req,res) => {
    Contributor.create(req.body)
        .then(newContributor=>{
            console.log("Results after creating new Contributor: ",newContributor)
            res.json({results: newContributor})
        })
        .catch(err=>{
            console.log("Error when trying to create a new Contributor: ",err)
            res.json(err)
        })
}

module.exports.getAllContributors = (req,res) => {
    Contributor.find().sort({type:1})
        .then(allContributors=>{
            console.log("Response when getting all Contributors --> ",allContributors)
            res.json({results: allContributors})
        })
        .catch(err=>{
            console.log("Error on back end when getting all Contributors: ",err)
            res.json(err)
        })
}

module.exports.getOneContributor = (req,res) => {
    Contributor.findOne({_id:req.params.id})
        .then(singleContributor=>{
            console.log("Response when getting a single Contributor: ",singleContributor)
            res.json({results: singleContributor})
        })
        .catch(err=>{
            console.log("Error on back end when getting single Contributor: ",err)
            res.json(err)
        })
}

module.exports.updateContributor = (req, res) => {
    Contributor.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedContributor=>{
            console.log("Response when updating a Contributor: ",updatedContributor)
            res.json({results: updatedContributor})
        })
        .catch(err=>{
            console.log("Error on back end when updating a single Contributor: ",err)
            res.json(err)
        })
}

module.exports.deleteContributor = (req,res) => {
    Contributor.remove({_id: req.params.id})
        .then(deletedContributor=>{
            console.log("Response when deleting a Contributor: ",deletedContributor)
            res.json({results:deletedContributor})
        })
        .catch(err=>{
            console.log("Error on back end when trying to delete Contributor: ",err)
            res.json(err)
        })
}