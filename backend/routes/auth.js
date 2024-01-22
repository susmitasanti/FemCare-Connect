const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

router.post('/createUser', [
    body('name', "Enter a valid Name").notEmpty(),
    body('role', "Enter a Role").notEmpty(),
    body('phone', "Enter a valid Phone No.").notEmpty().isMobilePhone('any', { strictMode: false }),
    body('username', "Enter a valid Username").notEmpty(),
    body('password', "Enter a valid Password").notEmpty().isStrongPassword()
], async (req, res) => {
    const result = validationResult(req);
    let success;
    if (result.isEmpty()) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const secPass = bcrypt.hashSync(req.body.password, salt);

            let user = await User.findOne({ email: req.body.username });
            if (user) {
                success = false;
                return res.status(400).json({ success, error: "An user with this email already exists." })
            }
            else {
                success = true
                user = await User.create({
                    name: req.body.name,
                    role: req.body.role,
                    phone: req.body.phone,
                    username: req.body.username,
                    password: secPass,
                })

                const data = {
                    user: user.Id
                };
                //This creates a token for the user
                const token = jwt.sign(data, JWT_SECRET);

                res.json({ success, authtoken: token })
            }

        } catch (error) {
            success = false
            console.log(error.message);
            res.status(500).json({ success, msg: "Internal Server Error" })
        }
    }
    else {
        success = false
        res.json({ success, errors: result.array() });
    }
});


router.post('/login', [
    body('username', "Enter a valid username").notEmpty(),
    body('role', "Enter a Role").notEmpty(),
    body('password', "Enter your Password").notEmpty().isStrongPassword()
], async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            //Checks if the user exists in the database
            let user = await User.findOne({ username: req.body.username })
            if (user) {

                if (user.role === req.body.role) {

                    //Compares the given password with the password in the database
                    const passwordCompare = await bcrypt.compare(req.body.password, user.password);
                    //If password matches...
                    if (passwordCompare) {
                        //stores user's id in the object:data
                        const data = {
                            user: user._id
                        };
                        //creates the token
                        const token = jwt.sign(data, JWT_SECRET);
                        const success = true;
                        res.json({ success, authtoken: token, user });
                    }
                    else {
                        const success = false;
                        res.status(400).json({ success, error: "Please enter correct credentials." });
                    }
                }
                else{
                const success = false;
                res.status(400).json({ success, error: "Please enter correct credentials." });
                }
            }
            else {
                const success = false;
                res.status(400).json({ success, error: "Please enter correct credentials." });
            }
        }
        catch (error) {
            const success = false;
            res.status(400).json({ success, msg: "Internal Server Error." });
        }
    }
    else {
        const success = false;
        res.send({ errors: result.array() });
    }

}
);
module.exports = router











