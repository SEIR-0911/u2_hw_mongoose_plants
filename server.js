const express = require('express');
const db = require('./db');
const plantsController = require('./controllers/plantController')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('This is root!'))
app.get('/plants', plantsController.getAllPlants)
app.get('/plants/:id', plantsController.getPlantById)
app.post('/plants', plantsController.createPlant)
app.put('/plants/:id', plantsController.updatePlant)
app.delete('/plants/:id', plantsController.deletePlant)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))