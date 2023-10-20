const express = require("express");
const db = require("./db");
const logger = require("morgan");
const bodyParser = require("body-parser");
const plantsController = require("./controllers/plantController");

// require() imports here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

//middleware:
//making morgan track in terminal every request (without it, doesn't print requests in terminal)
app.use(logger("dev"));
app.use(bodyParser.json());
// app.use() middleware here ^ ///////////////////

app.get("/", (req, res) => res.send("This is root!"));

app.get("/plants", plantsController.getAllPlants);

app.get("/plants/:id", plantsController.getOnePlant);

app.post("/plants", plantsController.createPlant);

app.put("/plants/:id", plantsController.updatePlant);

app.app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
