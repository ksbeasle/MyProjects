let mongoose = require('mongoose')

/* Game schema */
let gameSchema = mongoose.Schema({
    title:{ type: String,
            required: true
        },
    genre:{
            type: String,
            required: true
        },
    Rating:{
            type: Number,
            required: true
    }
})

let Game = module.exports = mongoose.model('Game', gameSchema)