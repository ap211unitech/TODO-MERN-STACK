const express = require("express");
const router = express.Router();

//Item Model
const ItemModel = require("../../models/Items")

//End Points
router.get("/", async (req, res) => {
    try {
        const Items = await ItemModel.find();
        res.json(Items);
    } catch (err) {
        res.json(err);
    }
})

router.post("/", async (req, res) => {
    try {
        const newItem = new ItemModel({
            title: req.body.title,
            content: req.body.content
        });
        const Items = await newItem.save();
        res.json(Items);
    } catch (err) {
        res.json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const Item = await ItemModel.deleteOne({ _id: req.params.id });
        res.json(Item);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;