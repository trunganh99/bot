const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bot.html");
});

app.get("/", (req, res) => {
    res.send("<h1> hello 1</h1");
});

app.listen(7777, () => {
    console.log("ddđ")
});