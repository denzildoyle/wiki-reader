const fetch = require("node-fetch");
const readline = require("readline");

var article = "pizza";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.prompt();

rl.question("Please enter your preferred language eg. en, nl, fr: ", answer => {
  var langCode = answer;
  console.log(langCode);
});


// var url = `https://${langCode}.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&titles=${article}&format=json`;

// fetch(url)
// .then(response => response.json())
// .then(data => (console.log(data)))
// .catch(err => console.error("Error retrieving article: " + err));