const fetch = require("node-fetch");
var langCode = "en";
var article = "pizza";

var url = `https://${langCode}.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&titles=${article}&format=json`;

fetch(url)
.then(response => response.json())
.then(data => (console.log(data)))
.catch(err => console.error("Error retrieving article: " + err));