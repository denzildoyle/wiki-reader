// const fetch = require("node-fetch");
const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// get the user language preference
rl.question("Please enter your preferred language eg. en, nl, fr: ", answer => {
  readLine(answer);
});

function readLine(langCode) {
  //TODO: create language function to convert language code to language
  console.log(
    `You have selected to run this application in ${langCode} to read. Use the command READ <article> load an article or HELP to show a full list of options:`
  );

  rl.prompt();

  rl.on("line", function(line) {
    if (hasWhiteSpace(line) == true) {
      var lineArray = line.split(" ");
      command = lineArray[0];
      article = line.replace(lineArray[0] + " ", "");
    } else {
      command = line;
    }
		
    console.log("Command:" + command);
    console.log("Article:" + article);
  });
}

function hasWhiteSpace(string) {
  return string.trim().indexOf(" ") >= 0 ? true : false;
}

function readInput(line) {}

// var article = "pizza";
// var url = `https://${langCode}.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&titles=${article}&format=json`;

// fetch(url)
// .then(response => response.json())
// .then(data => (console.log(data)))
// .catch(err => console.error("Error retrieving article: " + err));
