import { Given } from "@cucumber/cucumber";

Given(/^I am on the "([^"]*)" Page$/, async function(pageID: string) {
    const {
        screen: {page},
    }=this;
    await page.goto("https://hub.testingtalks.com.au/", {timeout: 60000, waitUntil: "domcontentloaded"});
    console.log(`I am on the ${pageID} page`)
})