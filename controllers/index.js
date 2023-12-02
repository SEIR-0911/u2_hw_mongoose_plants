const res = require('express/lib/response')
const { send } = require('express/lib/response')
const Plant = require('../models/plant')

const createPlant = async (req, res) => {
    try {
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant,
        })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
        return res.status(200).json({ plants }) 
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const getPlantById = async (req, res) => {
    try{
        const { id } = req.params
        const plant = await Plant.findById(id)
        if (plant) {
            return res.status(200).json({ plant })
        }
        return res.status(400).send('Plant with the specified id does not exist!')    
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const updatePlant = async (req, res) => {
    try {
        const { id } = req.params
        const plant = await Plant.findByIdAndUpdate(id, req.body, {new: true})
            if (!plant) {
                res.status(500).send('Plant not found!');
            }
            return res.status(200).json(plant);
    } 
    catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePlant = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Plant.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Plant deleted')
        }
        throw new Error('Plant not found!')
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
}

module.exports = {
    createPlant,
    getAllPlants,
    getPlantById,
    updatePlant,
    deletePlant
}