function waitForElementToDisplay(selector, time) {
        if(document.querySelector(selector)!=null) {
          window.location = document.evaluate("string(//div[contains(., 'This article was first published on')]/strong/a/@href)", document, null, XPathResult.stringValue, null).stringValue;
        }
        else {
            setTimeout(function() {
                waitForElementToDisplay(selector, time);
            }, time);
        }
    }

waitForElementToDisplay("div.entry > div:nth-child(3)", 10)


