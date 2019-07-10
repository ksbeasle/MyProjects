const express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const app = express()
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/AllGames", { useNewUrlParser: true })
let db = mongoose.connection


db.once('open', () => {
    console.log("Connected to MongoDB")
})

db.on('error', (err) => {
    console.log(err)
})
let schema = mongoose.Schema
let gameSchema = new schema({
    title:{type: String, required: true},
    score:{type: Number, required: true},
    rating:{type: String, required: true},
    platform:{type: String, required: true},
    genre:{type: String, required: true}
}, {collection:'games'})

var games = mongoose.model('games', gameSchema)





app.get('/', (req, res) => {
    
    
})


app.listen(8888, () => {
    console.log("Listening on Port: 8888");
});



