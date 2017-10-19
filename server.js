//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

//Set up express app and data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log("App listening on port 3000")
});