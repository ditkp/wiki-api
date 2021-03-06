//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true,
useUnifiedTopology: true});

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const articleSchema = new mongoose.Schema ({
  title: String,
  content: String
})
const Article = mongoose.model("Article",articleSchema);
// const article = new Article ({
// title: "Goku Says",
// content: "aaaaaaahhhhhhhhhhhhhh" });
// fruit.save();


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
