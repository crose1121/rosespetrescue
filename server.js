const express = require("express");
const cors = require("cors")


const app = express();
const port = 8000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())
app.use(express.static("images")) // tell the server where to store image uploads


const routeFile1 = "contributor.routes" //change the routeFile for each project
const routeFile2 = "pet.routes"

require("./server/config/config");
require(`./server/routes/${routeFile1}`)(app)
require(`./server/routes/${routeFile2}`)(app)


app.listen(port, () => console.log(`Listening on port: ${port}`))