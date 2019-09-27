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

function randomArticleURL(langCode) {
  return `https://${langCode}.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&format=json&grnlimit=1&explaintext=true`;
}

async function getArticles(url) {
  let response = await fetch(url);
  let data = await response.json()
  data = data.query.pages[
    Object.keys(data.query.pages)
  ];

  paragraphs = data.extract
    .replace("\t", "")
    .replace(/\n\s*\n/g, "\n")
    .split(/\n/)
    .filter(Boolean);

  return data = {
    paragraphs: paragraphs,
    article: data.title
  }
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
  randomArticleURL,
  getArticles
};
