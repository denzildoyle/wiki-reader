const fetch = require("node-fetch");
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

	console.log(
    `You have selected to run this application in ${convertLangCode(langCode)} to read. Use the command READ <article> eg. (READ pizza) load an article or HELP to show a full list of options:`
  );
		
  rl.prompt();

  rl.on("line", function(line) {

		lineArray = processLine(line);
		if (lineArray.length > 1) {
      command = lineArray[0];
      article = lineArray[1];
    } else {
      command = lineArray[0];
    }
		
		switch (command.toUpperCase()) {
      case "READ":
        if (article == "") {
          console.log("You must enter an ARTICLE to use the READ command.");
        } else {
          fetch(generateAPIURL(langCode, article))
            .then(response => response.json())
            .then(data => {
              paragraphs = data.query.pages[
                Object.keys(data.query.pages)
              ].extract
								.replace("\t", "")
								.replace(/\n\s*\n/g, '\n')
                .split(/\n/)
                .filter(Boolean);

							loadParagraphs(paragraphs);
            })
            .catch(err => console.error("Error retrieving article: " + err));
        }

        // reset article
        article = "";
        break;

      case "RANDOM":
        break;

      case "ABOUT":
        break;

      case "HELP":
        console.log(
          "\n\n READ <article>",
          "\n\n Print the article text. In plain text, one paragraph at a time",
          "\n Press 'Enter' to go to the next paragraph of the article or Q to",
          "\n stop reading."
        );

        console.log("\n\n QUIT", "\n\n Exit the application.");

        console.log(
          "\n\n ABOUT <article>",
          "\n\n Show metadata about an article",
          "\n \u2022 Creation date",
          "\n \u2022 Username of the author of the first revision",
          "\n \u2022 Last modified date",
          "\n \u2022 Username of the author or the last revision",
          "\n \u2022 Size in bytes"
        );

        console.log(
          "\n\n RANDOM",
          "\n\n Behave like the READ command above but with a random article."
        );
        break;

      case "QUIT":
        rl.close();
        break;

      default:
        console.log(
          "You have not entered a valid command. Use HELP to get a list of available commands."
        );
        break;
    }
	});
}

function processLine(line) {
	line = line.trim();
  if (hasWhiteSpace(line) == true) {
		return line.split(" ").filter(Boolean);
  } else {
    return [line];
  }
}

function hasWhiteSpace(string) {
  return string.indexOf(" ") >= 0 ? true : false;
}

function generateAPIURL(langCode, article) {
  return `https://${langCode}.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&titles=${article}&format=json`;
}

// TODO: Convert language code to language
function convertLangCode(langCode) {
	return langCode;
}

function loadParagraphs(paragraphs) {
  var index = 0;
  var stdin = process.stdin;
	
	stdin.resume();
  stdin.setEncoding("utf8");
	
	console.log("Use the down array [\u2193] to load article one paragraph at a time");

	// get key press
	stdin.on("data", function(key) {
		switch (key) {
			
			// down arrow pressed
			case "\u001b[B":
				if (index < paragraphs.length) {
					console.log("\n" + paragraphs[index]);
					index++;
				} else {
					console.log("\n\nYou have come to the end of the article");
					process.exit();
				}
				break;

			// quit
			case "Q":
				process.exit();
				break;
			
			default:
				console.log(
          "\n\nUse the down array [\u2193] to go to the next paragraph or [Q] to quit"
        );
				break;
		}
  });
}
