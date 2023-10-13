const express = require('express');
const router = express.Router();
const Cycle = require('../models/Cycle');
const Product=require('../models/Products')
const fetchuser = require("../middleware/fetchUser")
const { validationResult, body } = require('express-validator');

//Customer Routes
router.get('/fetchallCycles', fetchuser, async (req, res) => {
    try {
        const cycles = await Cycle.find({ user: req.user });
        if (cycles) {
            res.json(cycles)
        }
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
}
);

router.post('/addCycle', [
    body('startDate').notEmpty(),
    body('endDate').notEmpty()
], fetchuser, async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            cycle = await Cycle.create({
                user: req.user,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
            })
            res.json(cycle)
        } catch (error) {
            console.error(error.message)
            res.status(400).send("Internal Server Error.");
        }
    }
    else {
        res.send({ errors: result.array() });

    }
}
);

//Pharmacy Routes
router.get('/fetchMyProducts', fetchuser,async (req, res)=>{
    try {
        const products = await Product.find({ user: req.user });
        if (products) {
            res.json(products)
        }
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
})

router.get('/fetchAllProducts', async(req, res)=>{
    try{
        const products = await Product.find();
        res.json(products)
    }catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
})

router.get('/fetchSelectedCategory', async(req, res)=>{
    try{
        const products = await Product.find({category: req.query.category});
        res.json(products)
    }catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
})



module.exports = router