const fetch = require("node-fetch");

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

function randomArticleURL () {
  return "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=1";
}

// TODO: Convert language code to language
function convertLangCode(langCode) {
  return langCode;
}

module.exports = {
  processLine,
  hasWhiteSpace,
  generateAPIURL,
  convertLangCode,
  randomArticleURL
};
