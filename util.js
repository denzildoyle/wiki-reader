export function processLine(line) {
  line = line.trim();
  if (hasWhiteSpace(line) == true) {
    return line.split(" ").filter(Boolean);
  } else {
    return [line];
  }
}

export function hasWhiteSpace(string) {
  return string.indexOf(" ") >= 0 ? true : false;
}

export function generateAPIURL(langCode, article) {
  return `https://${langCode}.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&titles=${article}&format=json`;
}

// TODO: Convert language code to language
export function convertLangCode(langCode) {
  return langCode;
}
