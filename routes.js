"use strict";

const express = require("express");
const routes = express.Router();

routes.get("/music", (req, res) => {
    res.send("Getting all music from the database.");
});

routes.get("/music/:id", (req,res) => {
    res.send(`Getting music with the id: ${id} from the database.`);
});

routes.post("/music", (req, res) => {
    console.log(req.body);
    res.send("Added new music to the database.");
});

routes.delete("/music/:id", (req, res) => {
    console.log(id);
    res.send("Deleted music from the database.");
});

routes.put("/music/:id", (req,res) => {
    console.log(id, req.body);
    res.send("Updated music from the database.");
});