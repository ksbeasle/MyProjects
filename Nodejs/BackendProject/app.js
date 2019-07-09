const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post("/person", async (request, response) => {});
app.get("/people", async (request, response) => {});
app.get("/person/:id", async (request, response) => {});
app.put("/person/:id", async (request, response) => {});
app.delete("/person/:id", async (request, response) => {});

app.listen(3000, () => {
    console.log("Listening at :3000...");
});










/*const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.connect('mongob://localhost/AllGames')

/* SCHEMA 
var schema = mongoose.Schema
var gameSchema = new schema({
    title: {type:String, required: true},
    score: {type:Number, required: true},
    rating: {type:String, required: true},
    platform: {type:String, required: true},
    genre: {type:String, required: true}
})

var games = mongoose.model('games', gameSchema)


*/