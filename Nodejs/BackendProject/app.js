const Express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));















app.get("/", async (req, res) => {
    console.log("ok")
});


app.listen(8888, () => {
    console.log("Listening on Port :8888...");
});




