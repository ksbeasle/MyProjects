let mongoose = require('mongoose')

/* Game schema */
let gameSchema = mongoose.Schema({
    title:{ type: String, required: true },
    genre:{ type: String, required: true },
    rating:{ type: Number, required: true },
    comment:{ type: String, required: true },
    platform:{ type: String, required: true }
})

let Game = module.exports = mongoose.model('Game', gameSchema)