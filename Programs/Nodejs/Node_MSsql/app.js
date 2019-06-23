const sql = require('mssql')
//const express = require('express')
//const router = express.Router()

/* Database config */
const dbconfig = {
    server: "localhost\\SQLEXPRESS",
    database: "Games",
    user: "ksbeasle",
    password: "ksbeasle",
    port: "8888"
}

/* Get all games from Shooters table */
function getShooters(){
    var connect = new sql.ConnectionPool(dbconfig)
    var req = new sql.Request(connect)

    connect.connect(function (err){
        if(err){
            console.log(err)
        }
        req.query("SELECT * FROM Shooters", function(err, recordset){
             if(err){
                 console.log(err)
             }else{
                console.log(recordset)
             }
             connect.close()
        })
    })
}

/* Get all games from RPG table */
function getRPG(){
    var connect = new sql.ConnectionPool(dbconfig)
    var req = new sql.Request(connect)

    connect.connect(function (err){
        if(err){
            console.log(err)
        }
        req.query("SELECT * FROM RPG", function(err, recordset){
             if(err){
                 console.log(err)
             }else{
                console.log(recordset)
             }
             connect.close()
        })
    })
}

/* Get all games from Racing table */
function getRacing(){
    var connect = new sql.ConnectionPool(dbconfig)
    var req = new sql.Request(connect)

    connect.connect(function (err){
        if(err){
            console.log(err)
        }
        req.query("SELECT * FROM Racing", function(err, recordset){
             if(err){
                 console.log(err)
             }else{
                console.log(recordset)
             }
             connect.close()
        })
    })
}

/* Get all games from Sports table */
function getSports(){
    var connect = new sql.ConnectionPool(dbconfig)
    var req = new sql.Request(connect)

    connect.connect(function (err){
        if(err){
            console.log(err)
        }
        req.query("SELECT * FROM Sports", function(err, recordset){
             if(err){
                 console.log(err)
             }else{
                console.log(recordset)
             }
             connect.close()
        })
    })
}

/* Get all games from getSH table */
function getSH(){
    var connect = new sql.ConnectionPool(dbconfig)
    var req = new sql.Request(connect)

    connect.connect(function (err){
        if(err){
            console.log(err)
        }
        req.query("SELECT * FROM SurvivalHorror", function(err, recordset){
             if(err){
                 console.log(err)
             }else{
                console.log(recordset)
             }
             connect.close()
        })
    })
}

/* Get all games from Mobile table */
function getMobile(){
    var connect = new sql.ConnectionPool(dbconfig)
    var req = new sql.Request(connect)

    connect.connect(function (err){
        if(err){
            console.log(err)
        }
        req.query("SELECT * FROM Mobile", function(err, recordset){
             if(err){
                 console.log(err)
             }else{
                console.log(recordset)
             }
             connect.close()
        })
    })
}

/* Get all games from HM table */
function getHM(){
    var connect = new sql.ConnectionPool(dbconfig)
    var req = new sql.Request(connect)

    connect.connect(function (err){
        if(err){
            console.log(err)
        }
        req.query("SELECT * FROM HonorableMentions", function(err, recordset){
             if(err){
                 console.log(err)
             }else{
                console.log(recordset)
             }
             connect.close()
        })
    })
}
getShooters()
getRPG()
getRacing()
getSports()
getSH()
getMobile()
getHM()