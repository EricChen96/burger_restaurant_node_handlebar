const burger = require("../models/burger.js");

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgerList = {
            burgers: data,
        };
        console.log(burgerList);
        res.render("index", burgerList);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne({ burger_name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id/devoured", (req, res) => {
    const condition = { id: req.params.id };
    const update = { devoured: req.body.value };

    cat.update(update, condition, (result) => {
        if (result.affectedRows === 0) {
            // If no rows were affected, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;