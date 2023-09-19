const express = require('express');
const router = express.Router();
const Cycle = require('../models/Cycle');
const fetchuser = require("../middleware/fetchUser")
const { validationResult, body } = require('express-validator');

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

module.exports=router