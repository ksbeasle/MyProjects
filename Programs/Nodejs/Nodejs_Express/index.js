const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')



/* Models */
let Game = require('./models/games')

/* body-parser middleware */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/* connect to database */
mongoose.connect('mongodb://localhost/Games')
let db = mongoose.connection


db.once('open', () => {
    console.log("Connected to MongoDB")
})

db.on('error', (err) => {
    console.log(err)
})


let PORT = 3000
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))

/*  pug view engine */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


/* Routes */
app.get('/', (req, res) => {
    Game.find({}, (err, games) =>{
        if(err){
            console.log(err)
        }else{
        res.render('index', {
            title: 'Games List:',
            games: games
        })
    }
    })
    
})

/* Add a new Game */
app.get('/games/add', (req, res) => {
    res.render('addGame', {
        title: 'Add Game'
    })
})

/* POST request -- We will grab the input from 'addGame.pug' */
app.post('/games/add', (req, res) =>{
    let game = new Game()
    game.title = req.body.title
    game.genre = req.body.genre
    game.rating = req.body.rating
    game.comment = req.body.comment
    game.platform = req.body.platform

    game.save((err)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
})