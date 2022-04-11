// import controller file using require() and save it as a variable (ex: NameController)

const controllerFile = "contributor.controller" //change this for each project

const ContributorController = require(`../controllers/${controllerFile}`) //change NameController for each project

module.exports = (app) => {
    // routes go here along with functions from controller

    app.get('/api/contributors', ContributorController.getAllContributors)
    app.get('/api/contributors/:id', ContributorController.getOneContributor)
    app.post('/api/contributors', ContributorController.createContributor)
    app.put('/api/contributors/:id', ContributorController.updateContributor)
    app.delete('/api/contributors/:id',ContributorController.deleteContributor)
}
