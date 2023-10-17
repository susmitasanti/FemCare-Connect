const express = require('express');
const router = express.Router();
const Cycle = require('../models/Cycle');
const Product = require('../models/Products')
const Cart = require('../models/AddToCart')
const Notes = require('../models/Notes')
const fetchuser = require("../middleware/fetchUser")
const { validationResult, body } = require('express-validator');
const { findAllByTestId } = require('@testing-library/react');

let success;
//Customer Routes
router.get('/fetchallCycles', fetchuser, async (req, res) => {
    try {
        success = true;
        const cycles = await Cycle.find({ user: req.user });
        if (cycles) {
            res.json(cycles)
        }
    } catch (error) {
        success = false
        console.error(error.message)
        res.json({ success: success, msg: "An error occured" })
        // res.status(400).send("Internal Server Error.");
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
            success = true
            const cycle = await Cycle.create({
                user: req.user,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
            })
            res.json(cycle)
        } catch (error) {
            success = false
            console.error(error.message)
            res.json({ success: success, msg: "Internal Server Error" })
            // res.status(400).send("Internal Server Error.");
        }
    }
    else {
        res.send({ errors: result.array() });

    }
}
);

//Pharmacy Routes
router.get('/fetchMyProducts', fetchuser, async (req, res) => {
    try {

        const products = await Product.find({ user: req.user });
        res.json(products)
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
})

router.get('/fetchMyCart', fetchuser, async (req, res) => {
    try {
        const products = await Cart.find({ user: req.user, status: 'pending' });

        if (products) {
            // Collect promises for product information queries
            const productInfoPromises = products.map(async (product) => {
                const productInfo = await Product.findOne({ _id: product.product });
                return productInfo;
            });

            // Execute all the promises and wait for their results
            const productInfoArray = await Promise.all(productInfoPromises);

            res.json(productInfoArray);
        } else {
            res.status(404).json({ message: 'No products found in the user\'s cart.' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error.');
    }
});


router.get('/fetchAllProducts', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
})

router.get('/fetchSelectedCategory', async (req, res) => {
    try {
        const products = await Product.find({ category: req.query.category });
        res.json(products)
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
})

router.post('/addToCart', fetchuser, async (req, res) => {
    try {
        const product = await Cart.findOne({ product: req.body.product })
        if (product) {
            success = false
            res.json({ success: success, msg: "Already added to Cart" })
        }
        else {
            const addToCart = await Cart.create({
                user: req.user,
                product: req.body.product
            })
            res.json(addToCart)
        }
    } catch (error) {
        success=false
        console.error(error.message)
        res.json({ success: success, msg: "Internal Server Error." })
    }
})

router.post('/deleteProduct', fetchuser, async (req, res) => {
    try {
        success = true
        const addToCart = await Cart.deleteOne({ product: req.body.productId })
        res.json(addToCart)
    } catch (error) {
        success = false
        console.error(error.message)
        res.json({ success: success, msg: "Internal Server Error." })
        // res.status(400).send("Internal Server Error.");
    }
})

router.post('/deleteAll', fetchuser, async (req, res) => {
    try {
        success = true
        const products = await Cart.deleteMany({ user: req.query.userId })
        res.json(products)
    } catch (error) {
        success = false
        console.error(error.message)
        res.json({ success: success, msg: "Internal Server Error." })
        // res.status(400).send("Internal Server Error.");
    }
})

//Blogs



// ROUTE 1: Get all notes of a logged in user using GET: "/api/auth/fetchallnotes".
// router.post('/fetchallnotes', fetchuser, async (req, res) => {
//     try {
//         const notes = await Notes.find({ user: req.user });
//         if (notes) {
//             // const userInfo=await User.find({ _id: req.user });
//             res.json(notes)
//         }
//     } catch (error) {
//         console.error(error.message)
//         res.status(400).send("Internal Server Error.");
//     }
// }
// );

router.post('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user });
        if (notes) {
            res.json(notes)
        }
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
});


router.post('/fetchnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find();
        if (notes) {
            res.json(notes)
        }
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
});


// ROUTE 2: Add a new note using POST: "/api/auth/addnote". Login required.
router.post('/addnote', [
    body('title').notEmpty(),
    body('description').notEmpty()
], fetchuser, async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            user = await Notes.create({
                user: req.user,
                title: req.body.title,
                description: req.body.description,
                tag: req.body.tag
            })
            res.json(user)
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

//ROUTE 3: Update an existing note using PUT: "api/auth/updatenote/id". Login required.
router.put('/updatenote/:id', fetchuser, async (req, res) => {
try
   { //Create a newNote object
    const newNote = {};
    if (req.body.title) {
        newNote.title = req.body.title
    }
    if (req.body.description) {
        newNote.description = req.body.description;
    }
    if (req.body.tag) {
        newNote.tag = req.body.tag;
    }

    //req.params.id is the id mentioned in api
    //Find the note to be updated and update it.
    let note = await Notes.findById(req.params.id);
    if (!note) {
        res.status(404).send("Note not found");
    }
    //If the note's userId == id of the user who has requested to update, only then the note can be updated.
    if (note.user != req.user) {
        //401: Unauthorized user.
        res.status(401).send("Not allowed");
    }
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true }); //SYNTAX FOR UPDATING
    res.json(note)
}catch (error) {
    console.error(error.message)
    res.status(400).send("Internal Server Error.");
}
});

//ROUTE 4: Delete an existing note using DELETE: "api/auth/deletenote/id". Login required.
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {//req.params.id is the id mentioned in api
        //Find the note to be deleted and delete it.
        let note = await Notes.findById(req.params.id);
        if (!note) {
            res.status(404).send("Note not found");
        }
        //If the note's userId == id of the user who has requested to delete, only then the note can be deleted.
        else if (note.user != req.user) {
            //401: Unauthorized user.
            res.status(401).send("Not allowed");
        }
        else {
            note = await Notes.findByIdAndDelete(req.params.id) //SYNTAX FOR UPDATING
            res.json({ "Success": "Note has been deleted", note: note });
        }
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Internal Server Error.");
    }
})


module.exports = router