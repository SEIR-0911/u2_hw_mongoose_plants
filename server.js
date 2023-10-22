const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(logger('dev'));

// Routes
const plantController = require('./controllers/plantController');
app.get('/', (req, res) => res.send('This is root!'));
app.get('/plants', plantController.getAllPlants);
app.get('/plants/:id', plantController.getPlantById);
app.post('/plants', plantController.createPlant);
app.put('/plants/:id', plantController.updatePlant);
app.delete('/plants/:id', plantController.deletePlant);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  console.log('Successfully connected to MongoDB.');
});
