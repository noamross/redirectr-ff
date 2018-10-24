function getPostURL() {
  return document.evaluate("string(//div[contains(., 'This article was first published on')]/strong/a/@href)", document, null, XPathResult.stringValue, null).stringValue;
}

window.location = getPostURL()

