const express = require('express')
let mongoose = require('mongoose')
const app = express()
const path = require('path')

let PORT = 3000
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))

/*  pug view engine */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


/* Routes */
app.get('/', (req, res) => {
    let games = [
        {
        id:1,
        title: "Halo 3",
        rating: 10
        },
        {
        id:2,
        title: "Divinity",
        rating: 10
        },
        {
        id:3,
        title: "Assassins Creed",
        rating: 10
        }
    ]
    res.render('index', {
        title: 'Games List:',
        games: games
    })
})

/* Add a new Game */
app.get('/games/add', (req, res) => {
    res.render('addGame', {
        title: 'Add Game'
    })
})