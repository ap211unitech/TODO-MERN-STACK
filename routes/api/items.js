const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");

//Item Model
const ItemModel = require("../../models/Items")

//End Points
router.get("/", auth, async (req, res) => {
    try {
        const AllItems = await ItemModel.find();
        const Items = [];
        AllItems.forEach(note => {
            if (note.author == req.user.id) {
                Items.push(note);
            }
        })
        res.status(200).json(Items);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post("/", auth, async (req, res) => {
    try {
        const newItem = new ItemModel({
            title: req.body.title,
            content: req.body.content,
            author: req.user.id
        });
        const Items = await newItem.save();
        res.status(201).json(Items);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete("/:id", auth, async (req, res) => {
    try {
        let Item = await ItemModel.findById(req.params.id);
        if (Item.author == req.user.id) {
            const DeletedItem = await ItemModel.deleteOne({ _id: req.params.id });
            res.status(200).json(DeletedItem);
        }
        else {
            res.status(401).json({
                msg: "You can not delete this item"
            });
        }
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;